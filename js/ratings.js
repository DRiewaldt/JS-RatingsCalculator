function collect_ratings() {
    let ratings = {
        count: 0,
        sum: 0,
        average: 0
    };

    let rating = 0;
}

document.addEventListener('change', (e) => {
    const ratings = collect_ratings();
    ratings.average = document.querySelector("average");
});

const elements = document.querySelectorAll("rating");

elements.forEach(element => {
    element.id.replace('');
    let rating = parseInt(element.id);
    ratings.count += element.count.parseInt();
    ratings.sum += element.sum.parseInt() * rating;
});

if (ratings.count != 0) {
    ratings.average = sum / count;
    return collect_ratings(ratings);
}

