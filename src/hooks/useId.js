const useId = () => {
    const id = Math.random().toString(36).substr(2, 9);
    return id;
}

export default useId;