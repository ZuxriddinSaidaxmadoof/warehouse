create table users(
    id serial primary key,
    login varchar(36) unique not null,
    password text not null,
    full_name varchar(64) not null,
    role text not null
);

create table categories(
    id serial primary key,
    title varchar(64) unique not null,
    description varchar(256) default null,
    created_at timestamp default CURRENT_TIMESTAMP,
    last_updated_at timestamp default CURRENT_TIMESTAMP,
    created_by int not null,
    last_updated_by int default null,
    CONSTRAINT fk_created_by FOREIGN KEY(created_by)
       REFERENCES users(id) ON DELETE NO ACTION,
    CONSTRAINT fk_last_updated_by FOREIGN KEY(last_updated_by)
       REFERENCES users(id) ON DELETE NO ACTION
);

create table products(
    id serial primary key,
    name varchar(128) unique not null,
    description varchar(256) default null,
    count int default 1,
    price int default 0,
    category_id int not null,
    created_at timestamp default CURRENT_TIMESTAMP,
    last_updated_at timestamp default CURRENT_TIMESTAMP,
    created_by int not null,
    last_updated_by int default null,
    CONSTRAINT fk_created_by FOREIGN KEY(created_by)
       REFERENCES users(id) ON DELETE NO ACTION,
    CONSTRAINT fk_last_updated_by FOREIGN KEY(last_updated_by)
       REFERENCES users(id) ON DELETE NO ACTION,
    CONSTRAINT fk_category_id FOREIGN KEY(category_id)
       REFERENCES categories(id) ON DELETE CASCADE
);
