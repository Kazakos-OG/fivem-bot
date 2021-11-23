CREATE TABLE bans(
    steam varchar(255) DEFAULT 'Not Found',
    discord varchar(255) DEFAULT 'Not Found',
    fivem varchar(255) DEFAULT 'Not Found',
    reason varchar(255) DEFAULT 'Not Found',
    staff varchar(255) DEFAULT 'Not Found',
    timeoftheban varchar(255) DEFAULT 'Not Found'
);

CREATE TABLE cached_players(
    steam varchar(255) DEFAULT 'Not Found',
    discord varchar(255) DEFAULT 'Not Found',
    fivem varchar(255) DEFAULT 'Not Found',
    ip varchar(255) DEFAULT 'Not Found',
    connections varchar(255) DEFAULT 1
);