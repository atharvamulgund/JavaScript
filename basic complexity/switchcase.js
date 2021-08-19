var user = "admin";

switch (user) {
    case "admin":
        console.log("Full Access");
        break;
        case "sub-admin":
            console.log("create/delete content");
            break;
            case "testprep":
                console.log("create/delete test");
                break;
                case "user":
                    console.log("Only Access Content");
                    break;
    default:
        console.log("Trail user");
        break;
}