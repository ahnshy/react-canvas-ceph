import { Link } from "react-router-dom";

export default function Blank() {
    return (
        <>
            <h2>비어 있는 컨텐츠 입니다.</h2>
            <Link to="/">돌아가기</Link>
        </>
    );
}
