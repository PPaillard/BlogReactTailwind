SET foreign_key_checks = 0;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id int primary key NOT NULL AUTO_INCREMENT,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    hashedPassword varchar(255) NOT NULL,
    avatar varchar(255) DEFAULT NULL
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO user (firstname, lastname, email, hashedPassword) 
VALUES ("Pierre","Paillard","pierre@paillard",	"$argon2id$v=19$m=65536,t=3,p=4$7tUoOVwh6mJ/axXXOWQJAA$2wZGYdHcypO3l2MYHxJ7Ju8DcCGRpeK7XWmCHMc6uPk");


DROP TABLE IF EXISTS category;
CREATE TABLE category (
  id  int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  color varchar(20) NOT NULL DEFAULT "#9D174D"
)
ENGINE=InnoDB DEFAULT CHARSET = utf8;
INSERT INTO category (id, title) VALUES (1,"Tuto"), (2, "Article");

DROP TABLE IF EXISTS article;
CREATE TABLE article (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  content TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT NOW(),
  category_id INT,
  user_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
)
ENGINE=InnoDB DEFAULT CHARSET = utf8;

INSERT INTO article (title, content, created_at, user_id, category_id) 
VALUES ("Comment déployer rapidement un site web ?", "Ici, je vais vous montrer comment deployer un site web sur Heroku avec un stack React / Express & MySQL. Nous n'utiliserons que de l'hebergement gratuit.", "2023-01-14 22:22:42", 1, 1),
("Mon premier blog avec React !", "Mais ! C'est vraiment incroyable de developper un blog ! Et encore plus en React ! Et encore plus avec Express ! Et si on rajoute une couche MySQL, la c'est vraiment TOP MOUMOUTE ! Alors hop hop, on regarde ça.", "2022-11-20 12:00:00", 1, 2);

SET foreign_key_checks = 1;