CREATE TABLE IF NOT EXISTS users
(
    user_id SERIAL PRIMARY KEY,
    user_name character varying,
    user_password character varying,
    user_email character varying,
    user_created_at timestamp without time zone default (now() at time zone 'utc'),
    user_updated_at timestamp without time zone default (now() at time zone 'utc')
)