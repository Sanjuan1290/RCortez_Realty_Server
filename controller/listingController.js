const listingSchema = require('../model/listingModel')
const CustomError = require('../util/customError')

const getListing = async (req, res) => {

    const listing = await listingSchema.find()

    if(listing.length = 0 || !listing) throw new CustomError('list not found', 404)

    res.status(200).json({ message: 'successfully get listing', listing })
}

module.exports = { getListing }