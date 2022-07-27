export default function authHeader() {
    console.log("inauthheader");
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

    if (user && user.accessToken) {
        console.log(user.accessToken);
        // return { Authorization: 'Bearer ' + user.accessToken };
        return { "Authorization": user.accessToken }
    } else {
        return {};
    }
}