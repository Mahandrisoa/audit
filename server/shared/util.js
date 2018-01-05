function hasQueries(req) {
    var attributes = ["date", "division", "serveur"],
        results = [];
    if (Object.keys(req.query).length > 0) {
        for (var i = 0; i < attributes.length; i++) {
            if (attributes[i].toString() in req.query) {
                results.push(attributes[i]);
            }
        }
        console.log(results);
    }
    return {
        predicates: results.join('_'),
    };
}
module.exports.hasQueries = hasQueries