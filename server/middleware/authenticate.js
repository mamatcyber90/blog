module.exports = (req, res, next) => {
	if (req.isAuthenticated()) {
		next();
	} else {
		next(new Error(401));
	}
};