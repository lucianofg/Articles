import {Sequelize} from "sequelize";
import {schema} from "./db-config";

export const User = schema.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {type: Sequelize.STRING, allowNull: false},
    surname: {type: Sequelize.STRING, allowNull: false},
    password: {type: Sequelize.STRING, allowNull: false},
    salt: {type: Sequelize.STRING, allowNull: false},
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    work: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, { underscored: true})

export const Theme = schema.define('themes', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {type: Sequelize.STRING, allowNull: false},
}, { underscored: true})

export const Article = schema.define('article', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    title: {type: Sequelize.STRING, allowNull: false},
    content: {type: Sequelize.TEXT, allowNull: false},
    temps: {type: Sequelize.INTEGER},
    price: {type: Sequelize.DECIMAL(10, 2), defaultValue: 0},
}, { underscored: true});

export const Order = schema.define('order', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    timeOrderPlaced: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
}, { underscored: true})

Article.belongsTo(User, {as: 'author'})
Order.belongsTo(User)

Order.belongsToMany(Article, { through: 'order_article'})
Article.belongsToMany(Order, { through: 'order_article'})


Article.belongsToMany(User, {through: 'article_bought'})
User.belongsToMany(Article, {through: 'article_bought'})

Article.belongsToMany(User, {through: 'article_themes'})
User.belongsToMany(Article, {through: 'article_themes'})

