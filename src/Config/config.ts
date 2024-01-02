import dotenv from "dotenv";
dotenv.config();
const config = {
  port: process.env.PORT || 3000,
  mysql_database: process.env.MYSQL_DATABASE || "mysql",
  mysql_port: process.env.MYSQL_PORT || 3306,
  mysql_host: process.env.MYSQL_HOST || "localhost",
  mysql_user: process.env.MYSQL_USER || "root",
  mysql_password: process.env.MYSQL_PASSWORD || "",
};

export default config;
