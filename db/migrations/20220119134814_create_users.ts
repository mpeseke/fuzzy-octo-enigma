import { AbstractMigration, Info, ClientMySQL } from "https://deno.land/x/nessie@2.0.5/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    /** Runs on migrate */
    async up({ dialect }: Info): Promise<void> {
        await this.client.execute(`DROP TABLE IF EXISTS users`)
        await this.client.execute(`
            CREATE TABLE users (
                id int(11) NOT NULL AUTO_INCREMENT,
                first_name varchar(100) NOT NULL,
                last_name varchar(100) NOT NULL,
                email varchar(100) NOT NULL UNIQUE,
                hash varchar(100) NOT NULL,
                created_at timestamp not null default current_timestamp,
                PRIMARY KEY (id)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
        `)
    }

    /** Runs on rollback */
    async down(info: Info): Promise<void> {
        await this.client.execute(`DROP TABLE IF EXISTS users`)
    }
}
