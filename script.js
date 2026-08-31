const STORAGE_KEY = 'video-dashboard-local-data-v1';
const JSON_FILE_PATH = 'videos_data.json';
const FALLBACK_DATA = {
  updatedAt: '2026-08-31',
  categories: [
    {
      name: 'RP',
      items: [
        { title: 'RP ASMR érotique - La cabine de soulagement du stress', url: 'https://fr.pornhub.com/view_video.php?viewkey=6644a372dae0d', watched: true, tags: ['RP', 'ASMR', 'audio'] },
        { title: 'Un étranger chuchote dans votre oreille jusqu’à ce que vous jouissiez | Encouragement public à l’orgasme mains libres RP', url: 'https://fr.pornhub.com/view_video.php?viewkey=64d436eb6246e', watched: false, tags: ['RP', 'audio'] },
        { title: 'Muscle Dom vous taquine à la fête à l’orgasme | RP audio pour trans Men', url: 'https://fr.pornhub.com/view_video.php?viewkey=6679d25aa44ae', watched: false, tags: ['RP', 'audio', 'trans'] },
        { title: 'Premier rendez-vous avec une fille moyenne populaire ASMR Roleplay', url: 'https://fr.pornhub.com/view_video.php?viewkey=654060f0729ed', watched: false, tags: ['RP', 'ASMR', 'roleplay'] },
        { title: 'Yandere Roommate vous attache et utilise son vibromasseur sur vous ! | Audio RP', url: 'https://fr.pornhub.com/view_video.php?viewkey=64adcd16f35c2', watched: false, tags: ['RP', 'audio'] },
        { title: '[F4M] Maman te fait Cream ton pantalon [Good Boy] [Handjob] [Neck Kisses] [Almost Caught] [Risky]', url: 'https://fr.pornhub.com/view_video.php?viewkey=649d445bc0336', watched: false, tags: ['RP', 'F4M'] },
        { title: '7min en Heaven l’a rendue obsédée par votre bite ♡ | Tourné sous-RP audio avec sons humides', url: 'https://fr.pornhub.com/view_video.php?viewkey=64cb3e210aef5', watched: true, tags: ['RP', 'audio', 'dirty'] },
        { title: 'La femme de chambre froide commande d’accepter le creampie', url: 'https://fr.pornhub.com/view_video.php?viewkey=693fc9f1604c1', watched: false, tags: ['RP', 'audio'] },
        { title: '[FF4M ASMR ROLEPLAY] Deux Hot timides vous surpisent avec un trio salope dans votre tente [EmmaFielder]', url: 'https://fr.pornhub.com/view_video.php?viewkey=642ae04f54b87', watched: true, tags: ['RP', 'ASMR', 'FF4M'] },
        { title: 'Votre ami vous a envoyé un nu par accident [ASMR pour Men][Izzy Dizzy]', url: 'https://fr.pornhub.com/view_video.php?viewkey=6928ab46364f8', watched: true, tags: ['RP', 'ASMR', 'audio'] },
        { title: 'Aperçu audio : Votre Bratty Work-Bestie vous invite à une fête de seins nus de filles', url: 'https://fr.pornhub.com/view_video.php?viewkey=693d65cac8df5', watched: false, tags: ['RP', 'audio'] },
        { title: '[F4F] [F4TF] Vous attraper en train de lire Yuri Hentai ?! Recréons la scène ! [rp audio lesbienne]', url: 'https://fr.pornhub.com/view_video.php?viewkey=684e2c1c68a8c', watched: false, tags: ['RP', 'F4F', 'lesbien'] },
        { title: '[F4F] [F4TF] Vous attrapez une fille « hétéro » en train de descendre dans les vestiaires et vous l’aider à jouir [audio]', url: 'https://fr.pornhub.com/view_video.php?viewkey=67361a0175071', watched: false, tags: ['RP', 'F4F', 'lesbien'] },
        { title: 'F4F | ASMR Audio Porn pour femmes | Oh, tu te masturbes, puis-je te rejoindre ? | WLW | Orgasme gémissant', url: 'https://fr.pornhub.com/view_video.php?viewkey=652fed3707940', watched: false, tags: ['RP', 'F4F', 'WLW', 'ASMR'] },
        { title: 'Tu surprends ta coloc chaude en train de se masturber puis tu baise ASMR ROLEPLAY AUDIO ÉROTIQUE', url: 'https://fr.pornhub.com/view_video.php?viewkey=67b6bf7bba438', watched: false, tags: ['RP', 'ASMR', 'audio'] },
        { title: 'MtF4F - SPICY - Un début de nuit avec votre nouvelle petite amie timide - Aperçu', url: 'https://fr.pornhub.com/view_video.php?viewkey=65807dd24939a', watched: false, tags: ['RP', 'MtF4F', 'ASMR'] },
        { title: 'Lesbian ASMR AUDIO PORN | Let\'s fuck for real for the cameras this time | Costars to Lovers ASMR WLW', url: 'https://fr.pornhub.com/view_video.php?viewkey=6875307cc7a3f', watched: false, tags: ['RP', 'ASMR', 'lesbien'] },
        { title: 'Erotic Lesbian Audio for Women | Diary of a slutty gooner girl NNN failure | Can you follow along??', url: 'https://fr.pornhub.com/view_video.php?viewkey=68ff75d91d216', watched: false, tags: ['RP', 'ASMR', 'lesbien', 'audio'] },
        { title: 'ASMR Lesbian Porn | Roomie! I need your fingers in me to feel safe | Begging for you to fuck me', url: 'https://fr.pornhub.com/view_video.php?viewkey=6970fd374855d', watched: false, tags: ['RP', 'ASMR', 'lesbien'] },
        { title: 'Audio lesbienne | Hey Roomie J’ai besoin que tu partages ce gode avec moi ! | WLW colocataire gay ASMR', url: 'https://fr.pornhub.com/view_video.php?viewkey=695698ebc614e', watched: false, tags: ['RP', 'ASMR', 'lesbien', 'WLW'] },
        { title: 'ASMR ~ Touchez-vous avec moi, Princess. Bonne fille.. ♡ [Gentle Mommy Kink][Female Dirty Talk] F4F JOI', url: 'https://fr.pornhub.com/view_video.php?viewkey=6513223359478', watched: false, tags: ['RP', 'ASMR', 'F4F', 'JOI'] },
        { title: 'Audio SEX : elle crie OUI pendant que TU la baises', url: 'https://fr.pornhub.com/view_video.php?viewkey=67c9e5191f842', watched: false, tags: ['RP', 'audio', 'dirty'] },
        { title: 'Cute fille éjacule et gémit pour vous, pas de conversation, bordure ASMR JEU DE RÔLE AUDIO ÉROTIQUE', url: 'https://fr.pornhub.com/view_video.php?viewkey=67b6c0babce52', watched: false, tags: ['RP', 'ASMR', 'audio'] },
        { title: 'ASMR sexy gémissant, ESSAYEZ de ne pas jouir, 5 minutes', url: 'https://fr.pornhub.com/view_video.php?viewkey=ph5f677ebd1c891', watched: false, tags: ['RP', 'ASMR', 'audio'] },
        { title: 'PUIS-JE JOUIR 10 FOIS EN VINGT MINUTES OU NON ??? [voix uniquement] [NSFW AMSR] [Dirty Talk]', url: 'https://fr.pornhub.com/view_video.php?viewkey=668235ca6df36', watched: false, tags: ['RP', 'ASMR', 'dirty'] }
      ]
    },
    {
      name: 'ASMR',
      items: [
        { title: 'licking pas mal', url: 'https://fr.pornhub.com/view_video.php?viewkey=6927deb21bb42', watched: false, tags: ['ASMR', 'licking'] },
        { title: 'long licking', url: 'https://fr.pornhub.com/view_video.php?viewkey=ph5f1574f85d105', watched: false, tags: ['ASMR', 'licking'] },
        { title: 'jsp mais sympa i guess', url: 'https://fr.pornhub.com/view_video.php?viewkey=65e68c3bef371', watched: false, tags: ['ASMR'] },
        { title: 'sd', url: 'https://fr.pornhub.com/view_video.php?viewkey=686d906b8c8b6', watched: false, tags: ['ASMR'] },
        { title: 'LonikaMeow’s Filthy Ear Licking 3Dio ASMR Therapy Improve Your Concentration While I Lick & Drool 淫蕩耳仔3Dio舔舔療法｜港女舔到你專注度爆標', url: 'https://fr.pornhub.com/view_video.php?viewkey=69db41922617d', watched: false, tags: ['ASMR', 'ear', 'licking'] }
      ]
    },
    {
      name: 'Solo',
      items: [
        { title: 'Échauffement, culotte mouillée. MEGA JUS DE 💦 CHATTE QUI COULE', url: 'https://fr.pornhub.com/view_video.php?viewkey=678352288a477', watched: false, tags: ['solo', 'wet'] },
        { title: 'Culotte trempée et orgasmes glissants, conversation, gros plan', url: 'https://fr.pornhub.com/view_video.php?viewkey=6a18879719fdc#1', watched: false, tags: ['solo', 'wet'] },
        { title: 'Une fille sexy excitée ne peut s’empêcher de se toucher sur le sol de la salle de bain!!', url: 'https://fr.pornhub.com/view_video.php?viewkey=64cd2f4d12398', watched: false, tags: ['solo', 'bathroom'] },
        { title: 'WOW! Tellement de boue dans cette écolière! vrai doigté à la maison', url: 'https://fr.pornhub.com/view_video.php?viewkey=69a09648c6f4f', watched: false, tags: ['solo', 'closeup'] },
        { title: 'Beautiful blonde takes it all bareback', url: 'https://fr.pornhub.com/view_video.php?viewkey=686399919a83f', watched: false, tags: ['solo', 'blonde'] },
        { title: 'J\'ai des démangeaisons entre les jambes après une journée passée à porter une jupe d\'école moulante', url: 'https://fr.pornhub.com/view_video.php?viewkey=67d831000cb99', watched: false, tags: ['solo', 'story'] },
        { title: 'SQIRTING GROS PLAN petite asiatique de 18 ans petits seins se masturbe taquiner la chatte excitée et l’orgasme', url: 'https://fr.pornhub.com/view_video.php?viewkey=6748bbfb08680', watched: false, tags: ['solo', 'squirt'] },
        { title: 'Orgasme pendant un cours ennuyeux. Où sont mes culottes ?', url: 'https://fr.pornhub.com/view_video.php?viewkey=69ef0945ab0a6', watched: false, tags: ['solo', 'story'] },
        { title: 'La chatte parfaite d’une jeune femme ne peut pas arrêter de gicler sur elle-même', url: 'https://fr.pornhub.com/view_video.php?viewkey=ph60d5d8ddacdb1', watched: false, tags: ['solo', 'squirt'] },
        { title: 'Slime Puddle dans ma culotte - Gros plan orgasme pulsé féminin - LiluWetPussy', url: 'https://fr.pornhub.com/view_video.php?viewkey=ph63bfd364cd049', watched: false, tags: ['solo', 'wet', 'closeup'] },
        { title: 'POV : Je touche mes seins en me masturbant et me retrouve avec une chatte très humide', url: 'https://fr.pornhub.com/view_video.php?viewkey=ph63bb7182436e4', watched: false, tags: ['solo', 'pov'] },
        { title: 'OMG I\'M CUMMING! Humping Orgasm! Rubbing Pussy Table', url: 'https://fr.pornhub.com/view_video.php?viewkey=69ce3e1c06ee1', watched: false, tags: ['solo', 'orgasm'] }
      ]
    },
    {
      name: 'Createurices',
      items: [
        { title: 'Ella Camille VA', url: 'https://fr.pornhub.com/model/ella-camille-va', type: 'creator', style: 'RP', watched: false }
      ]
    },
    {
      name: 'Playlist',
      items: [
        { title: 'ASMR et RP', url: 'https://fr.pornhub.com/playlist/260754551', type: 'playlist', watched: false }
      ]
    }
  ]
};
const state = { filter: 'all', search: '', selectedCategory: 'all' };

function normalizeData(rawData) {
  const source = rawData && typeof rawData === 'object' ? rawData : { categories: [] };
  const categories = Array.isArray(source.categories) ? source.categories : [];

  return {
    updatedAt: source.updatedAt || new Date().toISOString(),
    categories: categories
      .filter((category) => category && typeof category === 'object')
      .map((category) => ({
        name: String(category.name || 'Autre').trim() || 'Autre',
        items: (Array.isArray(category.items) ? category.items : [])
          .filter((item) => item && typeof item === 'object' && typeof item.url === 'string' && item.url.trim())
          .map((item) => ({
            title: String(item.title || 'Sans titre').trim() || 'Sans titre',
            url: item.url.trim(),
            watched: Boolean(item.watched),
            type: item.type || 'video',
            style: item.style || ''
          }))
      }))
      .filter((category) => category.items.length)
  };
}

function saveData(data) {
  const normalized = normalizeData(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  return normalized;
}

function hasAnyItems(data) {
  return Array.isArray(data?.categories) && data.categories.some((category) => Array.isArray(category?.items) && category.items.length > 0);
}

async function getData() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.categories)) {
        const normalized = normalizeData(parsed);
        if (hasAnyItems(normalized)) {
          return normalized;
        }
      }
    } catch (error) {
      console.warn('Cache local invalide.', error);
    }
  }

  try {
    const response = await fetch(JSON_FILE_PATH, { cache: 'no-store' });
    if (response.ok) {
      const parsed = await response.json();
      if (parsed && Array.isArray(parsed.categories)) {
        const normalized = normalizeData(parsed);
        if (hasAnyItems(normalized)) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
          return normalized;
        }
      }
    }
  } catch (error) {
    console.warn('JSON non disponible, utilisation de la donnée locale de secours.', error);
  }

  const fallback = normalizeData(FALLBACK_DATA);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(fallback));
  return fallback;
}

function collectItems(data) {
  const items = [];
  for (const category of data.categories || []) {
    for (const item of category.items || []) {
      items.push({
        title: item.title,
        url: item.url,
        watched: !!item.watched,
        type: item.type || 'video',
        style: item.style || '',
        category: category.name
      });
    }
  }
  return items;
}

function getThumb(item) {
  const initials = (item.title || item.category || 'V')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase() || 'V';

  const colors = [
    ['#3b82f6', '#8b5cf6'],
    ['#10b981', '#14b8a6'],
    ['#f59e0b', '#ef4444'],
    ['#ec4899', '#8b5cf6'],
    ['#22c55e', '#3b82f6'],
    ['#f97316', '#fb7185']
  ];

  const seed = (item.title || item.url || '').split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const [from, to] = colors[seed % colors.length];

  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  thumb.style.background = `linear-gradient(135deg, ${from}, ${to})`;

  const icon = document.createElement('span');
  icon.className = 'thumb-icon';
  icon.textContent = '▶';

  const label = document.createElement('span');
  label.className = 'thumb-label';
  label.textContent = initials;

  thumb.appendChild(icon);
  thumb.appendChild(label);
  return thumb;
}

async function toggleWatchedStatus(item) {
  const data = await getData();

  for (const category of data.categories || []) {
    const index = (category.items || []).findIndex((entry) => entry.url === item.url || entry.title === item.title);
    if (index >= 0) {
      category.items[index].watched = !category.items[index].watched;
      saveData(data);
      render();
      return;
    }
  }
}

async function render() {
  const data = await getData();
  const items = collectItems(data).filter((item) => {
    const matchesSearch = !state.search || `${item.title} ${item.category}`.toLowerCase().includes(state.search.toLowerCase());
    const matchesCategory = state.selectedCategory === 'all' || item.category === state.selectedCategory;
    const matchesFilter = state.filter === 'all'
      || (state.filter === 'watched' && item.watched)
      || (state.filter === 'unwatched' && !item.watched);
    return matchesSearch && matchesCategory && matchesFilter;
  });

  const total = items.length;
  const watched = items.filter((item) => item.watched).length;
  document.getElementById('total-count').textContent = total;
  document.getElementById('watched-count').textContent = watched;
  document.getElementById('unwatched-count').textContent = total - watched;

  const grouped = {};
  for (const item of items) {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  }

  const grid = document.getElementById('category-grid');
  grid.innerHTML = '';

  const categoryNames = Object.keys(grouped);
  if (!categoryNames.length) {
    grid.innerHTML = '<div class="empty">Aucun élément ne correspond à la recherche.</div>';
    return;
  }

  for (const categoryName of categoryNames) {
    const card = document.createElement('section');
    card.className = 'category-card';

    const header = document.createElement('div');
    header.className = 'category-header';

    const titleWrap = document.createElement('div');
    titleWrap.style.display = 'flex';
    titleWrap.style.alignItems = 'center';
    titleWrap.style.gap = '10px';

    const title = document.createElement('span');
    title.className = 'category-name';
    title.textContent = categoryName;

    const count = document.createElement('span');
    count.className = 'category-count';
    count.textContent = String(grouped[categoryName].length);

    const deleteCategoryBtn = document.createElement('button');
    deleteCategoryBtn.type = 'button';
    deleteCategoryBtn.className = 'delete-btn';
    deleteCategoryBtn.textContent = 'Supprimer';
    deleteCategoryBtn.addEventListener('click', async () => {
      const updated = await getData();
      updated.categories = (updated.categories || []).filter((category) => category.name !== categoryName);
      saveData(updated);
      populateCategoryDropdown();
      render();
    });

    titleWrap.appendChild(title);
    titleWrap.appendChild(count);
    header.appendChild(titleWrap);
    header.appendChild(deleteCategoryBtn);

    const list = document.createElement('ul');
    list.className = 'items';

    for (const item of grouped[categoryName]) {
      const li = document.createElement('li');
      li.className = 'item';

      const row = document.createElement('div');
      row.className = 'item-row';

      const info = document.createElement('div');
      info.className = 'item-info';

      const thumb = getThumb(item);
      const textWrap = document.createElement('div');
      textWrap.className = 'item-text';

      const link = document.createElement('a');
      link.href = item.url || '#';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'title';
      link.textContent = item.title || 'Sans titre';

      const meta = document.createElement('div');
      meta.className = 'meta';

      const status = document.createElement('span');
      status.className = `pill ${item.watched ? 'watched' : 'unwatched'}`;
      status.innerHTML = `<span class="status-dot ${item.watched ? 'watched' : 'unwatched'}"></span>${item.watched ? 'Vu' : 'Pas vu'}`;

      const toggleBtn = document.createElement('button');
      toggleBtn.type = 'button';
      toggleBtn.className = 'toggle-btn';
      toggleBtn.textContent = item.watched ? 'Marquer non vu' : 'Marquer vu';
      toggleBtn.addEventListener('click', () => toggleWatchedStatus(item));

      const type = document.createElement('span');
      type.className = 'pill type';
      type.textContent = item.type === 'creator' ? 'Créateur' : (item.style || 'Vidéo');

      const deleteItemBtn = document.createElement('button');
      deleteItemBtn.type = 'button';
      deleteItemBtn.className = 'delete-btn';
      deleteItemBtn.textContent = 'X';
      deleteItemBtn.title = 'Supprimer cette vidéo';
      deleteItemBtn.addEventListener('click', async () => {
        const updated = await getData();
        const categoryIndex = updated.categories.findIndex((category) => category.name === item.category);
        if (categoryIndex >= 0) {
          updated.categories[categoryIndex].items = (updated.categories[categoryIndex].items || []).filter((entry) => entry.url !== item.url && entry.title !== item.title);
          saveData(updated);
          populateCategoryDropdown();
          render();
        }
      });

      meta.appendChild(status);
      meta.appendChild(type);
      meta.appendChild(toggleBtn);
      meta.appendChild(deleteItemBtn);

      textWrap.appendChild(link);
      textWrap.appendChild(meta);
      info.appendChild(thumb);
      info.appendChild(textWrap);
      row.appendChild(info);
      li.appendChild(row);
      list.appendChild(li);
    }

    card.appendChild(header);
    card.appendChild(list);
    grid.appendChild(card);
  }
}

async function populateCategoryDropdown() {
  const data = await getData();
  const select = document.getElementById('category-select');
  const picker = document.getElementById('category-picker');

  select.innerHTML = '<option value="all">Toutes catégories</option>';
  picker.innerHTML = '<option value="">Choisir une catégorie</option>';

  for (const category of data.categories || []) {
    const optionA = document.createElement('option');
    optionA.value = category.name;
    optionA.textContent = category.name;
    select.appendChild(optionA);

    const optionB = document.createElement('option');
    optionB.value = category.name;
    optionB.textContent = category.name;
    picker.appendChild(optionB);
  }
}

document.getElementById('search').addEventListener('input', (event) => {
  state.search = event.target.value.trim();
  render();
});

document.getElementById('category-select').addEventListener('change', (event) => {
  state.selectedCategory = event.target.value;
  render();
});

document.querySelectorAll('.filter-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    state.filter = button.dataset.filter;
    render();
  });
});

document.getElementById('add-item-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = document.getElementById('new-item-title').value.trim();
  const url = document.getElementById('new-item-url').value.trim();
  const chosenCategory = document.getElementById('category-picker').value.trim();
  const customCategory = document.getElementById('new-category-name').value.trim();
  const watched = document.getElementById('new-item-status').value === 'true';

  if (!title || !url) return;

  const categoryName = chosenCategory || customCategory || 'Autre';
  const data = await getData();
  let category = (data.categories || []).find((entry) => entry.name === categoryName);

  if (!category) {
    category = { name: categoryName, items: [] };
    data.categories.push(category);
  }

  const existingIndex = (category.items || []).findIndex((entry) => entry.url === url || entry.title === title);
  const item = { title, url, watched, type: 'video' };

  if (existingIndex >= 0) {
    category.items[existingIndex] = { ...category.items[existingIndex], ...item };
  } else {
    category.items.push(item);
  }

  saveData(data);
  document.getElementById('add-item-form').reset();
  populateCategoryDropdown();
  render();
});

(async function init() {
  await populateCategoryDropdown();
  await render();
})();
