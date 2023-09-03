
import ScriptsInner from "@/Components/ScriptsInner";
import Script from "next/script";
export default function DefaultScripts(){

	return <>
		<Script strategy={'beforeInteractive'}    src={`https://theonebureau.design/assets/js/jquery-3.6.0.min.js`}/>
			<ScriptsInner/>

	</>;
}
