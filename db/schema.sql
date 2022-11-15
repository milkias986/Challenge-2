create table if not exists loginuser(
    user_id int not null primary key auto_increment,
    user_username varchar(255),
    user_password varchar(255),

)