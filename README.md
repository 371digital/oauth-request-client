# 371Digital oAuth Request Client 

## Description
371Digital bünyesinde üretilen ürünlerin, yönetim ve üretim parçalarının Web & Mobil & Desktop servislerinde auth işemleri için kullanılması gereken pakettir. 

## Methods

### login
Kullanıcı giriş işlemi için kullanılır.

```
const result = await login("test@371digital.com", "123456");
```

#####  Success Response
```json
{
    "message": String,
    "code": Number,
    "data": {
        "accessToken": "User JWT Token",
        "userId": "User Id"
    }
}
```

### logout
Kullanıcının çıkış işlemi için kullanılır. Request katmanındaki jwt token'ı sıfırlar.


```
const result = await logout();
```

### verifyToken
Kullanıcının jwt tokenının geçerli olup olmadığını kontrol eder. Eğer kullanıcının jwt token'ı valid ise request katmanına token'i register eder. Bu işlem authentication gereketiren  (``getUserData`` gibi) methodların başarı ile çalışabilmesi için zorunludur.


```
const result = await verifyToken("jwtToken");
```

#####  Success Response
```json
{
    "message": String,
    "code": Number,
    "data": {
        "userId": "User Id",
    }
}
```

### getUserData
Kullanıcının bilgilerini çekmek için kullanılır.


```
const result = await getUserData();
```

#####  Success Response
```json
{
    "message": String,
    "code": Number,
    "data": {
       "mail": "User Mail (test@371digital.com)",
       "fullName": "Test User",
       "id": "User Id"
    }
}
```
