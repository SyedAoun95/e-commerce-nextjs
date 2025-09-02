import ResponsiveImage from "@/components/common/ResponsiveImage";
import Link from "next/link";
import { ProductImageType } from "@/redux/CartProductProp";

const Card = ({
	image,
	name,
	link,
}: {
	image: ProductImageType;
	name: string;
	link: string;
}) => {
	return (
		<div className='text-center'>
			<ResponsiveImage
				images={image}
				altText={""}
				width={350}
				height={318}
				pictureClassName={""}
				imgClassName={"rounded-lg w-full sm:w-auto"}
			/>
			<strong className='block my-8 sm:mt-10 sm:mb-8'>{name}</strong>
			<Link href={link} className='btn bg-[#A45223]'>
				See Producti
			</Link>
		</div>
	);
};
export default Card;
