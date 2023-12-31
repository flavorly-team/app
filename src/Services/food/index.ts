type DetectionResult = {
    outputs: [
        {
            data: {
                concepts: Concept[]
            }
        }
    ]
}

export type Concept = {
    id: string,
    name: string,
    value: number,
    app_id: string
}

export const uploadIbb = async (source) => {
    const formData = new FormData()
    formData.append('image', source)
    let apiUrl =
        'https://api.imgbb.com/1/upload?key=2d4f7df973976b36379f2cc7bd16807a';

    return fetch(apiUrl, {
        body: formData,
        method: 'POST'
    })

        .then((response) => response.json())
        .then((result) => {
            let url = result.data.image.url
            if (url) {
                return url
            }
        })
        .catch(err => {
            alert('Cannot process your image');
            console.log(err);
        });
}

export const uploadImageCloudinary = async (image) => {
    let base64Img = `data:image/jpg;base64,${image}`;
    let apiUrl =
        'https://api.cloudinary.com/v1_1/dwfzcj8tz/image/upload';
    let data = {
        file: base64Img,
        upload_preset: 'hnefaxtm'
    };

    return fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST'
    })
        .then(async response => {
            let data = await response.json();
            if (data.secure_url) {
                console.log("Upload successfully")
                return data.secure_url
            }

        })
        .catch(err => {
            alert('Cannot process your image');
            console.log(err);
        });
}

// Clarifai food-item-recognition
export const detectFood = async (uri) => {
    console.log(uri)
    const PAT = "2750bc695bd24d2695cc424ba2785ea4";
    const USER_ID = "clarifai";
    const APP_ID = "main";
    const MODEL_ID = "food-item-recognition";
    const MODEL_VERSION_ID = "1d5fd481e0cf4826aa72ec3ff049e044";
    const IMAGE_URL = uri;

    const raw = JSON.stringify({
        user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID,
        },
        inputs: [
            {
                data: {
                    image: {
                        url: IMAGE_URL,
                    },
                },
            },
        ],
    });

    const requestOptions = {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: "Key " + PAT,
        },
        body: raw,
    };

    const dummy: Concept = {
        id: 'string',
        name: 'string',
        value: 0,
        app_id: 'string'
    }

    return fetch(
        "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
        requestOptions
    )
        .then((response) => response.json())
        .then((result: DetectionResult) => {
            return result.outputs[0].data.concepts
        })
        .catch((error) => {
            console.log("error", error)
            return [dummy]
        });
};

export const searchRecipe = async (ingredients) => {
    const searchReicpeApi = 'https://api.spoonacular.com/recipes/findByIngredients?' + new URLSearchParams({
        ingredients: ingredients,
        number: '1',
        ignorePantry: 'true',
        ranking: '1'
    }).toString()

    console.log(searchReicpeApi)

    return fetch(searchReicpeApi, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "x-api-key": 'a7f46677e7a44e029747ba26aa33de1b'
        },
    })

        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            return result
        })
        .catch(err => {
            alert('Error');
            console.log(err);
        });
}