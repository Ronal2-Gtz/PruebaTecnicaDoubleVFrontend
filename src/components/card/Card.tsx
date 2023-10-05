import { Box } from "../index";

const img =
  "https://www.semana.com/resizer/66IcknKlGTQ5k8NWPLW79cvKg28=/fit-in/1280x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/KVRYJNDM6FGKPGL6WXPO26HFUA.png";


export const Card = (): React.ReactElement => {
  return (
    <div className="max-w-[780px] w-3/5 h-auto m-auto p-5 shadow-lg shadow-blue-100">
      <div className="flex gap-7">
        <img src={img} alt="profile" className=" w-36 h-36 rounded-full" />
        <div className="flex flex-col gap-1 text-lg">
          <h2 className="font-semibold text-2xl">Ronaldo Gutierrez</h2>
          <a
            className=" text-blue-400 underline"
            target="_blank"
            href="http://"
          >
            @Ronal2-Gtz
          </a>
          <p>Colombia</p>
          <p>Software Developer</p>
          <div className="flex items-center gap-5 mt-4">
            {[1, 2, 3].map(() => (
              <Box title="Repos" label="13" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
