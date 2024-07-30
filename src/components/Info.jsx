/* eslint-disable react/prop-types */
const Info = ({ icon, text, count }) => {
	return (
		<div className="flex items-center flex-col justify-center border-8 border-secondary p-10 border-double">
			<div>{icon}</div>
			<h3 className="text-3xl font--semibold">{count}</h3>
			<h5>{text}</h5>
		</div>
	);
};

export default Info;
