const listingSchema = require('../model/listingModel')
const propertiesSchema = require('../model/propertiesModel')
const CustomError = require('../util/customError')

const getListing = async (req, res) => {

    const listing = await listingSchema.find()

    if(!listing) throw new CustomError('list not found', 404)
    if(listing.length === 0) throw new CustomError('There are no properties with this type', 404)


    res.status(200).json({ message: 'successfully get listing', listing })
}

const getProperties = async (req, res) => {

    const properties = await propertiesSchema.find()

    if(!properties) throw new CustomError('properties not found', 404)

    if(properties.length === 0) throw new CustomError('There are no properties with this type', 404)

    res.status(200).json({ message: 'successfully get properties', properties })
}


const populateListing = async (req, res) => {
    const { type, location, images, description, googleMap } = req.body

    if(!type || location || images || description || googleMap) throw new CustomError('please include all details.', 400)

    await listingSchema.deleteMany({})
    await listingSchema.insertMany({ type, location, images, description, googleMap })
}

const populateProperties = async (req, res) => {
    const {  type, category, images, location, description, googleMap } = req.body

    if(!type || category || image || location || description || googleMap) throw new CustomError('please include all details.', 400)

    await propertiesSchema.deleteMany({})
    await propertiesSchema.insertMany({ type, category, images, location, description, googleMap })
}

module.exports = { getListing, getProperties, populateListing, populateProperties }