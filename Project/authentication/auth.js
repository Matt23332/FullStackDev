        function switchTab(tabName) {
            // Update tab buttons
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');

            // Update form content
            const forms = document.querySelectorAll('.form-content');
            forms.forEach(form => form.classList.remove('active'));
            
            if (tabName === 'login') {
                document.getElementById('login-form').classList.add('active');
            } else {
                document.getElementById('register-form').classList.add('active');
            }
        }

        function handleLogin() {
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate login
            alert('Login successful! (This is a demo)');
        }

        function handleRegister() {
            const firstName = document.getElementById('register-name').value;
            const lastName = document.getElementById('register-lastname').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirm = document.getElementById('register-confirm').value;

            if (!firstName || !lastName || !email || !password || !confirm) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirm) {
                alert('Passwords do not match');
                return;
            }
            
            if (!terms) {
                alert('Please accept the Terms & Conditions');
                return;
            }
            
            // Simulate registration
            alert('Account created successfully! (This is a demo)');
        }

        function handleSocialLogin(provider) {
            alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login coming soon! (This is a demo)`);
        }