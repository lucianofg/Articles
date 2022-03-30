import { User, Theme, Article} from "./schema";
import {dbConfig} from './db-config'

const db = {
    Theme: Theme,
    User: User,
    Article: Article,
    dbConfig: dbConfig
}

db.dbConfig.sync()