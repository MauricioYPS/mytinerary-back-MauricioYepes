import Countries from "../../models/Country.js";

let allCountries = async (req, res, next) => {
    try {
        let all = await Countries.find();
        return res.status(200).json({
            response: all,
        });
    } catch (error) {
        next(error);
    }
};

export  { allCountries }