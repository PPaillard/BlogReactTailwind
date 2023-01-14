const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "article" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  // Override
  findAll() {
    return this.connection
      .query(`select ${this.table}.id, ${this.table}.title, ${this.table}.content, ${this.table}.created_at,  
    user.lastname, user.firstname, category.title as category_title from  ${this.table}
    JOIN category ON category.id = ${this.table}.category_id
    JOIN user ON ${this.table}.user_id = user.id`);
  }

  insert(article) {
    return this.connection.query(
      `INSERT INTO ${this.table} (title, content, id_user, id_category) VALUES (?, ?, ?, ?)`,
      [article.title, article.content, article.id_user, article.id_category]
    );
  }

  update(article) {
    return this.connection.query(`UPDATE ${this.table} SET ? WHERE id = ?`, [
      article,
      article.id,
    ]);
  }
}

module.exports = ArticleManager;
