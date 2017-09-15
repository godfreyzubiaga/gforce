import createServer from "../backend/app";
import {ObjectId} from 'mongodb';

const seed = async () => {
  const app = await createServer();

//   const suppliers = [
//     {
//         name : "Li Industries",
//         items : [
//             {
//                 controlNo : ObjectId("71fb2ae466aadb3b08fcc1f4"),
//                 price : 200
//             },
//             {
//                 controlNo : ObjectId("71fb2ae466aadb3b08fcc1f1"),
//                 price : 500
//             }
//         ]
//     },
//     {
//         name : "Nav Industries",
//         items : [
//             {
//                 controlNo : ObjectId("71fb2ae466aadb3b08fcc1f1"),
//                 price : 400
//             },
//             {
//                 controlNo : ObjectId("71fb2ae466aadb3b08fcc1f4"),
//                 price : 100
//             }
//         ]
//     },
//   ];
    const suppliers = [
        {
            name : "Li Industries",
            items : [
                {
                    name : "Lumber",
                    price : 200
                },
                {
                    name : "Metal",
                    price : 500
                }
            ]
        },
        {
            name : "Nav Industries",
            items : [
                {
                    name : "Metal",
                    price : 200
                },
                {
                    name : "Lumber",
                    price : 500
                }
            ]
        },
    ];

  const msgsService = app.service("/api/suppliers");
  await msgsService.remove(null);
  return Promise.all(suppliers.map(msg => msgsService.create(msg)));
};

export default seed;
