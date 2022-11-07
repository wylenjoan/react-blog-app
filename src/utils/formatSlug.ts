function formatSlug(title: string) {
    return title.trim().toLowerCase().replace(/\s+/g, '-');
}

export default formatSlug;
