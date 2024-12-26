import ContactUs from '@/components/Contact';
import Glimpses from '@/components/Glimpses';
import Tracks from '@/components/tracks/tracks';
import Timeline from '@/components/Timeline';
import About from "@/components/About";

export default function Home() {
	return (
		<>
		    <About />
			<Tracks />
			<Timeline />
			<Glimpses />
			<ContactUs />
		</>
	)
}
