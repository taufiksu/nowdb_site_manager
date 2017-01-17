# NowDB Site Manager
Site Manager Based on NowDB

## Prerequisite

### Database
```groovy
Collection & Field
user
    - name
    - username
    - password
    - email
    - phone
    - role
user_login
    - device_id
    - user_id
    - name
    - username
    - ip
    - role
    - date
menu
    - user_id
    - parent_id
    - title
    - active
    - clickable
    - hardlink
    - lang
    - position
menu_page
    - user_id
    - menu_id
    - menu_name
    - menu_position
    - content_id
    - content_title
    - content_type
    - date
article
    - user_id
    - user_name
    - title
    - description
    - status
    - comment
    - lang
    - cover
    - date
article_image
    - article_id
    - user_id
    - title
    - file
    - date
article_label
    - article_id
    - label
article_category
    - article_id
    - category_id
    - category_title
link
    - user_id
    - title
    - uri
    - target
    - date
service
    - user_id
    - title
    - description
    - file
    - link
    - status
    - date
category
    - title
slideshow
    - user_id
    - title
    - description
    - file
    - link
    - status
    - date
partner
    - user_id
    - title
    - link
    - file
    - date
```

### API
```groovy
Please enable all NowDB API V2
```

