import Welcome from "@/components/Welcome/Welcome";
import Rsvp from "@/components/Rsvp/Rsvp";
import Schedule from "@/components/Schedule/Schedule";
import Map from "@/components/Map/Map"
import Gifts from "@/components/Gifts/Gifts"

export default function Home() {
    return (
        <>
            <main>
                <Welcome />
                <Rsvp />
                <Schedule />
                <Gifts />
                <Map />
            </main>
        </>
    );
}
