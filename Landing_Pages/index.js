document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async function (event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await loginUser(username, password);
                // response contiens le token, le token contiens l'user. Il faut utiliser jwt (l'installer avec npm i avant) pouir decoder le token, et extraire l'utilisateur.
                document.addEventListener('DOMContentLoaded', function () {
                    const loginForm = document.getElementById('login-form');
                    if (loginForm) {
                        loginForm.addEventListener('submit', async function (event) {
                            event.preventDefault();
                            
                            const username = document.getElementById('username').value;
                            const password = document.getElementById('password').value;
                
                            try {
                                const response = await loginUser(username, password);
                                
                                // response contient le token, le token contient l'utilisateur. 
                                // Il faut utiliser jwt (l'installer avec `npm install jsonwebtoken` avant) pour décoder le token et extraire l'utilisateur.
                                const token = response.token; // Supposons que le token est retourné sous cette clé
                
                                if (token) {
                                    const decodedUser = parseJwt(token); // Décodage du token
                                    console.log("Utilisateur connecté :", decodedUser); // Affichage dans la console
                
                                    // Stocker l'utilisateur décodé dans localStorage pour l'utiliser après la redirection
                                    localStorage.setItem("user", JSON.stringify(decodedUser));
                
                                    // Timeout de 3 secondes avant la redirection
                                    setTimeout(() => {
                                        window.location.href = "../Menu/Menu.html";
                                    }, 3000);
                                } else {
                                    throw new Error("Token non reçu après l'authentification.");
                                }
                            } catch (error) {
                                alert(error.message || 'Erreur lors de la connexion');
                            }
                        });
                    }
                });
                
                /**
                 * Fonction pour décoder un token JWT et extraire l'utilisateur.
                 * @param {string} token - Le token JWT.
                 * @returns {Object} Payload décodé (contenant l'utilisateur).
                 */
                function parseJwt(token) {
                    try {
                        return JSON.parse(atob(token.split('.')[1])); // Décodage de la partie payload du JWT
                    } catch (error) {
                        console.error("Erreur lors du décodage du token :", error);
                        return null;
                    }
                }
                
                const token = response.token; // Supposons que le token est retourné sous cette clé

                console.log("Token reçu :", token);
                setTimeout(() => {
                    window.location.href = "../Menu/Menu.html";
                }, 3000); // Attend 3 secondes avant de rediriger
                                
                // window.location.href = "../Menu/Menu.html";
                console.log(response);
            } catch (error) {
                alert(error.message || 'Erreur lors de la connexion');
            }
        });
    }
});



// document.addEventListener('DOMContentLoaded', function () {
//     const loginForm = document.getElementById('login-form');
//     if (loginForm) {
//         loginForm.addEventListener('submit', async function (event) {
//             event.preventDefault();
            
//             const username = document.getElementById('username').value;
//             const password = document.getElementById('password').value;

//             try {
//                 const response = await loginUser(username, password);
//                 // response contiens le token, le token contiens l'user. Il faut utiliser jwt (l'installer avec npm i avant) pouir decoder le token, et extraire l'utilisateur.
                
//                 window.location.href = "../Menu/Menu.html";
//                 console.log(response);
//             } catch (error) {
//                 alert(error.message || 'Erreur lors de la connexion');
//             }
//         });
//     }
// });
