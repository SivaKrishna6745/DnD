const currentPath = window.location.pathname;
const formContainer = document.querySelector('#form-container');
const formWithInputs = `
            <button type="submit" class="btn btn-classes" formaction="/get-classes" />
                <span class="btn-label">Classes</span>
                <span class="btn-icon">➔</span>
            </button>
            <button type="submit" class="btn btn-features" formaction="/get-features" />
                <span class="btn-label">Features</span>
                <span class="btn-icon">➔</span>
            </button>
            <button type="submit" class="btn btn-monsters" formaction="/get-monsters" />
                <span class="btn-label">Monsters</span>
                <span class="btn-icon">➔</span>
            </button>
            <button type="submit" class="btn btn-spells" formaction="/get-spells" />
                <span class="btn-label">Spells</span>
                <span class="btn-icon">➔</span>
            </button>
        `;
const formWithCards = `
            <div class="card card-cl flex fl-cntr">
                <a href="/get-classes" class='flex'>
                    <h2>Classes</h2>
                    <ul>
                        <li>
                            Discover the wide array of DnD Classes, each revealing their unique traits and characteristics.
                        </li>
                        <li>
                            Click to discover their wild characteristics!
                        </li>
                    </ul>
                </a>
            </div>
            <div class="card card-fe flex fl-cntr">
                <a href="/get-features" class='flex'>
                    <h2>Features</h2>
                    <ul>
                        <li>
                            Discover the variety of DnD Features, each unveiling their unique traits and characteristics.
                        </li>
                        <li>
                            Click to dive into their details.
                        </li>
                    </ul>
                </a>
            </div>
            <div class="card card-mo flex fl-cntr">
                <a href="/get-monsters" class='flex'>
                    <h2>Monsters</h2>
                    <ul>
                        <li>
                            Embark on an adventure with the diverse DnD Monsters, each revealing their unique traits and secrets.
                        </li>
                        <li>
                            Click to uncover their secrets!
                        </li>
                    </ul>
                </a>
            </div>
            <div class="card card-sp flex fl-cntr">
                <a href="/get-spells" class='flex'>
                    <h2>Spells</h2>
                    <ul>
                        <li>
                            Unleash the magic with DnD Spells, each one revealing its own enchanting characteristics.
                        </li>
                        <li>
                            Click to discover their mystical secrets!
                        </li>
                    </ul>
                </a>
            </div>
        `;
const projectHero = document.querySelector('#project-hero');
const projectTitle = document.querySelector('#project-title');
if (currentPath === '/') {
    formContainer.innerHTML = formWithCards;
    formContainer.classList.add('form-with-cards', 'grid');

    let img = document.createElement('img');
    img.classList.add('project-hero');
    img.src = 'images/DnD.avif';
    img.alt = 'DnD banner';
    projectHero.appendChild(img);

    projectTitle.innerHTML = `Welcome to <span>Dungeons & Dragons</span>`;
} else {
    formContainer.innerHTML = formWithInputs;
    formContainer.classList.add('form-with-inputs');

    projectTitle.innerHTML = `<span>Dungeons & Dragons</span>`;
}

const data = window.resultsData;
const count = window.count;

if (data.length >= 30) {
    const pagination = document.querySelector('#pagination');
    const perPageCount = 30;
    const noOfPages = count / perPageCount;
    console.log(noOfPages);

    for (let i = 1; i < noOfPages + 1; i++) {
        const li = document.createElement('li');
        li.classList.add('pagination-item');
        li.textContent = i;
        pagination?.appendChild(li);
    }

    pagination.addEventListener('click', (e) => {
        if (e.target.classList.contains('pagination-item')) {
            const clickedPage = parseInt(e.target.textContent);
            console.log('clickedPage', clickedPage);
            const currentURL = new URL(window.location);
            currentURL.searchParams.set('page', clickedPage);
            window.location.href = currentURL;
        }
    });
}
