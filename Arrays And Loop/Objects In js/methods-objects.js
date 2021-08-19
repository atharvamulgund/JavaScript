var user = {
    firstname : "Atharva",
    lastname : "Mulgund",
    role : "Admin",
    logincount: 32,
    signedIn : true,
    courseList : [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function () {
        return `${this.firstname} is enrolled in total ${this.courseList.length} courses`
    },
    Info: function () {
        return `All the information: Firstname: ${this.firstname}
        Lastname: ${this.lastname}
        Role: ${this.role}
        Number of times logined in: ${this.logincount}
        Is he signed in: ${this.signedIn}
        ${this.getCourseCount()}`
    }
}

// console.log(user.getCourseCount());
// user.buyCourse("React Js Course")
// console.log(user.getCourseCount());
console.table(user.Info());


