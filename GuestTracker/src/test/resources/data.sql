SET FOREIGN_KEY_CHECKS = 0;
truncate guest;
truncate authorities;
truncate users;
SET FOREIGN_KEY_CHECKS = 1;


insert into guest(id, approved, date, days, floor, username)
values(1, 0, '2020-03-04', 3, 4, 'ubaid');

insert into users(username, enabled, password)
values  ('admin', 1, '{noop}admin'),
        ('guest', 1, '{noop}guest');

insert into authorities(username, authority)
values ('admin', 'ROLE_ADMIN'),
       ('guest', 'ROLE_USER');

