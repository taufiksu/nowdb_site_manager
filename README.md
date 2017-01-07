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
```

### API
```groovy
Please enable all NowDB API V2
```

