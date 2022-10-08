module.exports = {
    "up": "CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, UNIQUE KEY id (id), name varchar(255) NOT NULL, email varchar(255) NOT NULL, password TEXT,role_id INT, status INT, PRIMARY KEY (id))",
    "down": "DROP TABLE users"
}

