const { MongoClient, ObjectID } = require("mongodb");

const uri = 'mongodb://127.0.0.1:27017';

const dbName = 'wpu';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect((error, client) => {
    if (error) {
        return console.log('Koneksi Gagal');
    }

    // pilih database
    const db = client.db(dbName);

    //Menambahkan 1 data ke Collection mahasiswa
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: 'Erik',
    //         email: 'erik@gmail.com'
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log('gagal menambahkan data!');
    //         }
    //         console.log(result);
    //     }
    // )

    // Menambahkan lebih dari 1 data
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             nama: "Erik",
    //             email: "erikss@yahoo.com"
    //         },
    //         {
    //             nama: "Avip",
    //             email: "avip@yahoo.com"
    //         }
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log("data gagal di tambahkan!")
    //         }

    //         console.log(result);
    //     }
    // )

    // Menampilkan semua data yang ada di collection mahasiswa
    // console.log(
    //     db
    //         .collection('mahasiswa')
    //         .find()
    //         .toArray((error, result) => {
    //             console.log(result);
    //         })
    // );

    // Menampilkan data berdasarkan kriteria yang ada di collection mahasiswa
    // console.log(
    //     db
    //         .collection('mahasiswa')
    //         .find({ _id: ObjectID('6225b7a820884d22dadb5d30') })
    //         .toArray((error, result) => {
    //             console.log(result);
    //         })
    // );


    // Mengubah data berdadsarkan id
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID('6225be58ecc02d07e680aa0c')
    //     },
    //     {
    //         $set: {
    //             email: 'erik@yahoo.com',
    //         }
    //     }
    // );

    // updatePromise
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })


    // Mengubah data lebih dari 1, berdasarkan kriteria
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Erik'
    //     },
    //     {
    //         $set: {
    //             nama: 'Erik Doank'
    //         }
    //     }
    // );

    // Menghapus satu data
    // db.collection('mahasiswa')
    //     .deleteOne({
    //         _id: ObjectID('6225be9b06e4b071283c4542'),
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })

    // Menghapus lebih dari satu data
    db.collection('mahasiswa')
        .deleteMany({
            nama: 'Erik Doank',
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })

});