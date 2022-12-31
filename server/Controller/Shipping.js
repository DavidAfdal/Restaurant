const Shipping = require('../Model/Shipping')
const Order = require('../Model/Order')
const Cart = require('../Model/Cart')
const User = require('../Model/User')
const Discount = require('../Model/Discount')

const submitShipping = async (req, res, next) => {
    let useriId = req.params.id
    try {
        const findUser = await User.findById(useriId)
        if (findUser.cart_id == "0") {
            res.status(200).json({
                message: 'succes',
                data: "Please insert Food First and Checkout"
            })
        } else {
            try {
                const newShipping = await new Shipping({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    phone_number: req.body.phone_number,
                    company: req.body.company,
                    country: req.body.country,
                    city: req.body.city,
                    zip_code: req.body.zip_code,
                    address_1: req.body.address_1,
                    address_2: req.body.address_2
                }).save()
                try {
                    let disc = 0
                    console.log(req.query.disc)
                    if (req.query.disc != null || req.query.disc != "" || req.query.disc != undefined) {
                        try {
                            let getDiscount = await Discount.findByIdAndUpdate(req.query.disc, {
                                $inc: {
                                    "quantity": -1
                                }
                            }, { new: true })
                            disc = getDiscount.discount
                            console.log(disc)
                        } catch (err) {
                            next(err)
                        }
                    }
                    const findCart = await Cart.findById(findUser.cart_id);
                    let tax = 5
                    let newTotal = findCart.total_price_cart + (findCart.total_price_cart * (tax / 100)) - (findCart.total_price_cart * (disc / 100))
                    const saveOrder = await new Order({
                        shipping_id: newShipping._id,
                        cart_id: findCart._id,
                        sub_total: findCart.total_price_cart,
                        shipping: 0,
                        tax: tax,
                        discount: disc,
                        total: newTotal
                    }).save()
                    try {
                        const saveUser = await User.findByIdAndUpdate(useriId, {
                            $push: {
                                order: [
                                    {
                                        order_id: saveOrder._id,
                                        status: 'Payment Proses'
                                    }]
                            }
                        })
                        try {
                            await Cart.findByIdAndUpdate(findUser.cart_id, {
                                $set: {
                                    food: [],
                                    total_price_cart: 0,
                                    status_cart: "None"
                                }
                            })
                        } catch (err) {
                            next(err)
                        }
                        res.status(200).json({
                            message: 'succes',
                            data: saveOrder,
                            coba: saveUser
                        })
                    } catch (err) {
                        next(err)
                    }

                } catch (err) {
                    next(err)
                }
            } catch (err) {
                next(err)
            }
        }
    } catch (err) {
        next(err)
    }
}

module.exports = { submitShipping }