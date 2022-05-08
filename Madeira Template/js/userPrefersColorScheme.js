const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark').matches;
//const userPrefersLight = window.matchMedia('(prefers-color-scheme: light').matches;

if(userPrefersDark) {
    console.log("User prefers dark interface");
}
else {
    console.log("User prefers light interface");
}
