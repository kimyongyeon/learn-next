import Layout from '@/layouts/Layout';
import '@/styles/globals.css';
import Link from 'next/link';
/**
 * 커스컴 app파일을 만드는 이유는 ?
 * - 모든 페이지에 공통스타일을 적용하기 위해
 * - 모든 페이지에 공통기능(메뉴등)을 적용하기 위해
 * - 인증/인가 처리를 위해
 * @param {*} param0
 * @returns
 */

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
		// <div>
		// 	{/* 만약 custom app을 사용하지 않으면 아래 nav 태그를 모든 컴포넌트 해더에 넣어야 할 것이다. */}
		// 	<nav>
		// 		{/* 앵커 태그를 쓰지 않고 링크 태그를 쓰는 이유는 속도가 빨라지기 때문에. */}
		// 		<Link href="/home">Home</Link> | <Link href="/login">Login</Link>
		// 	</nav>
		// 	<div>
		// 		{/* 실제 page 컴포넌트가 들어가는 부분 */}

		// 	</div>
		// </div>
	);
}
