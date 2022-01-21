import { Pool } from 'pg';

const connectionString = 'postgres://lckklwir:tIlSJncyt27y9DEHBXn3fbqxujm7sA0-@kesavan.db.elephantsql.com/lckklwir';

const db = new Pool ({ connectionString });

export default db;