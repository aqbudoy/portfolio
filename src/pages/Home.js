import id from '../assets/photo.jpg'

export default function Home() {
    return (
        <div className="w-100 h-100 m-0 p-0 row align-items-stretch justify-content-center">
            <div className="col-2" />
            <div className="col-5 text-start">
                <img src={id} alt={"Me!"} width="75%" height="auto" />
            </div>
            <div className="col-3 py-3">
                <div className="w-100 h-100 d-flex align-items-end justify-content-start flex-column text-end" style={{ gap: "5%" }}>
                    <h2 style={{ color: "var(--primary)" }}><strong>Mark Gutierrez</strong></h2>
                    <h6 style={{ color: "var(--primary-muted)" }}>UI Designer, Full-stack Developer</h6>
                    <h5 style={{ borderRight: "1px solid white", paddingRight: "0.5em" }}>
                        Content designer
                    </h5>
                </div>
            </div>
            <div className="col-2" />
        </div>
    )
}