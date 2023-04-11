const logout = async function () {
	const response = await fetch('/api/user/logout', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	});
	console.log(response)
	if (response.ok) {
		document.location.replace('/login');
	} else {
		alert('Failed to log out');
	}
};
document.querySelector('#logout-button').addEventListener('click', logout);
