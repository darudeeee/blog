import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";


// input 이벤트들을 한 번에 묶어서 처리
const InputControl = (props) => { // input은 자식(props로 부모 컴포넌트에게 정보 전달)
	const InputChange = (event, name) => { // 사용자가 input에 무엇을 입력하면 inputChange(부모)에서 받음
		props.Function(name, event.target.value)
	};

	// 공통된 css들을 한 번에 묶어서 처리
	return (
		<div
			style={{ display: "flex", marginTop: "10px", marginBottom: "5px" }}
		>
			<Typography
				variant="h5"
				gutterBottom
				style={{
					fontFamily: "KyoboHandwriting2023wsa",
					width: "90px",
					textAlign: "right",
					marginRight: "5px",
				}}
			>
				{props.label} : 
			</Typography>
			<TextField
			multiline={props.multiline} // 다른애들한텐 false 주소만 true, 아니면 주소에 textarea mui에서 가져오기
			rows={props.rows}
				placeholder={props.placeholder}  
				type={props.type}
				size="small"
				value={props.value}
				onChange={(event) => InputChange(event, props.name)} // 각 event들의 name과 위 label/placeholder 안의 값들은 조금씩 다르니까 props로 처리해줌
			/>
		</div>
	)
}

export default InputControl;