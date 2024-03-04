import Stack from "react-bootstrap/Stack";

function Categories() {
    return (
        <Stack direction="horizontal" gap={3}>
            <div className="p-2">All</div>
            <div className="p-2">popular</div>
            <div className="p-2">recent</div>
        </Stack>
    );
}

export default Categories;
