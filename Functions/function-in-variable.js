// Content:
/*
Define a fucntion that can answer the role of a user,
A user can be on following roles:
1. admin - will all access
2. subadmin - with access to create/delete a course
3. testprep - with access to create/delete tests
4. user - consume all content
5. other - trial user 

Input: getUserRole(name, role)
*/ 

var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            // break; //Since we were returning the value hence it is not required

        case "subadmin":
            return `${name} is subadmin with create/delete a cousrse`
            
    
        case "testprep":
            return `${name} is testprep with create/delete a test`
            
    
        case "user":
            return `${name} is a user to consume content `
            
      
        default:
            return `${name} is a trial user to consume content `
            
    }
}

console.log(getUserRole("Atharva", "Admin"));

var getRole = getUserRole("Senapi", "subadmin")

console.log(getRole);

// hence we can declare a function a variable