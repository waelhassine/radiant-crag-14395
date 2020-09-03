const advancedResults = (model, userRole, populate) => async (
  req,
  res,
  next
) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };
  //console.log(reqQuery);
  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Create operators ($gt, $gte, etc)
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  //console.log(JSON.parse(queryStr));
  // Finding resource
  console.log(queryStr);
  query = model.find(JSON.parse(queryStr)).find({ role: userRole });
  console.log(query);
  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }
  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  console.log(page);

  const limit = parseInt(6, 10) || 6;
  console.log(limit);
  const startIndex = (page - 1) * limit;
  console.log('startIndex', startIndex);
  const endIndex = page * limit;
  console.log('endIndex', endIndex);
  const total = await model.countDocuments();

  //console.log(nbrPagea);
  query = query.skip(startIndex).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }
  // console.log(
  //   '-------------------------------------------------------------------------------------------------------'
  // );
  //console.log(query);
  // Executing query
  let results = await query;
  // console.log(userRole);
  //console.log(results);
  //console.log('total' + total);
  let nbrPage = total / limit;
  // if (Number.isInteger(nbrPage) == !false) {
  //   console.log(nbrPage);
  //   nbrPage = Math.ceil(nbrPage);
  // }
  //console.log(typeof nbrPage);
  const nbrPagea = Math.ceil(nbrPage);
  //console.log('nbrPagea' + nbrPagea);
  //  let rebels = results.filter((user) => user.role === userRole);
  console.log('-------- from advence midleware ---------------');
  //console.log(results);
  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    nbrPagea,
    data: results,
  };

  next();
};

module.exports = advancedResults;
