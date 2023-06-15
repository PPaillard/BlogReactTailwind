const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_TIMING } = process.env;

const hashPassword = (req, res, next) => {
  // hash the password using argon2 then call next()
  argon2
    .hash(req.body.password)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      // on supprime le mot de passe en clair pour ne laisser que le mot de passe hashé.
      delete req.body.password;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
};

const verifyPassword = (req, res) => {
  // req.user.hashedPassword doit nous être fournis par un middleware précedent
  // correspondant au mot de passe hashé, stocké dans la BDD pour l'utilisateur en train de se connecter
  // On verifie si le mot de passe en clair reçu dans req.body.password, une fois hashé, correspond
  // au mot de passe hashé stocké dans la BDD pour le user.
  argon2
    .verify(req.user.hashedPassword, req.body.password)
    .then((isVerified) => {
      // si la comparaison est positive, l'utilisateur est validé (email + password)
      if (isVerified) {
        // on créé un token, encodé avec le mot de passe contenu dans le fichier d'environnement
        const token = jwt.sign({ sub: req.user.id }, JWT_SECRET, {
          algorithm: "HS512",
          expiresIn: JWT_TIMING, // le token expirera après la durée défini dans le .env
        });
        delete req.user.hashedPassword;
        res.send({ token, user: req.user });
      } else res.sendStatus(401);
    })
    .catch((err) => {
      // do something with err
      console.error(err);
      res.sendStatus(400);
    });
};

const verifyToken = (req, res, next) => {
  try {
    // On récupère la variable du header contenant l'authorization (le bearer token)
    const autorizationHeader = req.headers.authorization;
    if (!autorizationHeader)
      throw new Error("Autorization needed for this route");

    const [type, token] = autorizationHeader.split(" ");
    // Si le type du token n'est pas Bearer => error
    if (type !== "Bearer") throw new Error("Only Bearer token allowed");
    // Si pas de token detecté => Error
    if (!token) throw new Error("Token needed");
    // on place le contenu du token (payloads dans la propriété payloads de la requête)
    // afin de pouvoir retrouver les infos de l'utilisateurs connecté dans la prochaine fonction.
    req.payloads = jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
};
