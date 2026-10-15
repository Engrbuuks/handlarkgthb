/* Handlark Home helpers: the rotating tips, the personal lines and team time.
   Plain functions with no access to the page, loaded before app.js and tested in test/home.test.js.
   Everything here works from what the server already sent the viewer, so nothing private is added. */
(function (root) {
'use strict';

/* ---------- tips: short, original, kind, about work ---------- */
var NUGGETS = [
  'Start with the smallest step you can see.',
  'Five minutes of work beats an hour of worry.',
  'Name the next action, then do only that.',
  'One clear task at a time is plenty.',
  'Close the tabs you are not using.',
  'Write down what done looks like first.',
  'A rough first draft is still progress.',
  'Ask your question early. It saves a day.',
  'A quick question now beats a guess later.',
  'Clear handovers make tomorrow lighter.',
  'Leave notes your future self will thank you for.',
  'Say what you finished, not only what is left.',
  'Tell the client before they need to ask.',
  'Share good news with clients the same day.',
  'Deadlines are easier when everyone knows them early.',
  'If a deadline is slipping, say so today.',
  'Bad news early is kinder than bad news late.',
  'Rest is part of the work.',
  'Short breaks keep your best thinking sharp.',
  'Water, a stretch, then back to it.',
  'Protect one quiet hour for deep work.',
  'Turn off alerts while you focus.',
  'Finish one thing before starting the next.',
  'Done and sent is better than perfect and waiting.',
  'Celebrate small wins. They add up.',
  'Tick it off and enjoy the moment.',
  'Progress counts, even on slow days.',
  'Saying no kindly protects your yes.',
  'It is fine to ask for more time.',
  'Unclear task? Ask one question before you start.',
  'Break big jobs into pieces you can finish.',
  'Plan tomorrow before you log off today.',
  'Let your calendar show what matters most.',
  'Batch small replies into one sitting.',
  'Answer messages at set times, not all day.',
  'The hardest part is opening the file.',
  'Start rough. Polish comes later.',
  'A clear subject line saves everyone time.',
  'Put the deadline and owner on every request.',
  'Repeat back what the client asked for.',
  'Confirm the brief before you begin.',
  'When stuck, explain the problem out loud.',
  'Stuck for twenty minutes? Ask for help.',
  'Help a teammate today. It comes back around.',
  'Thank someone for their work today.',
  'Good work deserves a proper handover.',
  'Hand over with links, not only words.',
  'Write the next step at the top.',
  'Keep notes where the team can find them.',
  'Check the brief once more before you send.',
  'Read it once aloud before sending.',
  'Mistakes happen. Fix them and share the lesson.',
  'A calm reply works better than a fast one.',
  'Hard email? Draft it now, send it after lunch.',
  'Mornings suit your hardest task.',
  'Match the task to your energy.',
  'Tired? Do the easy admin now.',
  'A tidy desk makes a clearer head.',
  'Leave work at work when the day ends.',
  'Log off on time. Tomorrow needs you rested.',
  'Your best work needs good sleep too.',
  'Track your time while it is fresh.',
  'Note your hours today, not on Friday.',
  'Clients trust what they can see.',
  'A short update keeps clients calm.',
  'Promise what you can do, then do it well.',
  'Ask the client what success looks like.',
  'Small checklists prevent big misses.',
  'Use a template for work you repeat.',
  'Write the steps once and reuse them.',
  'Tiny jobs piling up? Clear three now.',
  'Delete one task you will never do.',
  'Pick the task that moves a client forward.',
  'Ten focused minutes can unstick a whole day.',
  'Set a timer and begin.',
  'Begin before you feel ready.',
  'Momentum starts with one small thing done.',
  'Every finished task frees up headspace.',
  'Celebrate finishing as much as starting.',
  'Look back at what you did this week.',
  'Friday notes make Monday easier.',
  'Plan the week, then trust the plan.',
  'Leave space in your day for surprises.',
  'Every meeting needs an agenda and an end time.',
  'End each meeting with clear next steps.',
  'Write action items while the call is fresh.',
  'Quiet colleague? Invite their view.',
  'Kind words help hard feedback land.',
  'Give feedback on the work, not the person.',
  'Ask what would make their day easier.',
  'Different time zone? Leave a complete message.',
  'Write messages that make sense while you sleep.',
  'A steady pace is a good pace.',
  'Good questions are a sign of good work.',
  'Check what is due before you open email.'
];

/* ---------- rotation: no tip repeats until every one has shown ---------- */
function shuffled(n, rand) {
  var a = [], i, j, t;
  for (i = 0; i < n; i++) a.push(i);
  for (i = n - 1; i > 0; i--) { j = Math.floor(rand() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; }
  return a;
}
/** The next tip index. st is kept by the caller between calls: {order, pos, last}. */
function nextNugget(st, n, rand) {
  rand = rand || Math.random; n = n || NUGGETS.length;
  if (!st.order || st.order.length !== n || !(st.pos < n)) {
    st.order = shuffled(n, rand); st.pos = 0;
    if (n > 1 && st.order[0] === st.last) { st.order[0] = st.order[n - 1]; st.order[n - 1] = st.last; }   // never the same tip twice in a row across rounds
  }
  st.last = st.order[st.pos++];
  return st.last;
}
/** What slot k of the headline shows: personal lines first, then every other slot, with tips between. */
function slotFor(k, nPersonal) {
  if (nPersonal && k % 2 === 0) return { kind: 'line', i: (k / 2) % nPersonal };
  return { kind: 'tip' };
}

/* ---------- time zones ---------- */
var WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], FMT = {};
function validTz(tz) { if (!tz) return false; try { new Intl.DateTimeFormat('en-US', { timeZone: tz }).format(0); return true; } catch (e) { return false; } }
function parts(tz, ms) {
  var f = FMT[tz] || (FMT[tz] = new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', weekday: 'short' }));
  var o = {}; f.formatToParts(new Date(ms)).forEach(function (p) { o[p.type] = p.value; });
  var hh = ('0' + (+o.hour % 24)).slice(-2);
  return { day: o.year + '-' + o.month + '-' + o.day, hm: hh + ':' + o.minute, min: (+o.hour % 24) * 60 + +o.minute, wd: WD.indexOf(o.weekday), y: +o.year, mo: +o.month, d: +o.day, s: +o.second };
}
function offsetMin(tz, ms) { ms -= ms % 1000; var o = parts(tz, ms); return Math.round((Date.UTC(o.y, o.mo - 1, o.d, Math.floor(o.min / 60), o.min % 60, o.s) - ms) / 6e4); }
/** The moment a local day and time happens in a zone. */
function zonedMs(day, hhmm, tz) {
  var p = String(day).split('-').map(Number), m = String(hhmm || '00:00').split(':').map(Number), g = Date.UTC(p[0], p[1] - 1, p[2], m[0] || 0, m[1] || 0);
  return g - offsetMin(tz, g - offsetMin(tz, g) * 6e4) * 6e4;
}
/** A zone shown as its distance from GMT, such as GMT+1. Never a place. */
function offsetLabel(tz, ms) { var m = offsetMin(tz, ms), s = m < 0 ? '-' : '+', a = Math.abs(m); return 'GMT' + (m ? s + Math.floor(a / 60) + (a % 60 ? ':' + ('0' + a % 60).slice(-2) : '') : ''); }
var toMin = function (v) { var m = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(String(v || '')); return m ? +m[1] * 60 + +m[2] : null; };
var hmOf = function (min) { min = ((min % 1440) + 1440) % 1440; return ('0' + Math.floor(min / 60)).slice(-2) + ':' + ('0' + min % 60).slice(-2); };
function addDay(day, n) { var p = String(day).split('-').map(Number), d = new Date(Date.UTC(p[0], p[1] - 1, p[2] + n)); return d.toISOString().slice(0, 10); }

/* ---------- working hours and status ---------- */
var DEF_START = 9 * 60, DEF_END = 17 * 60;
/** A person's working hours in minutes after midnight, their time. Without hours set, 9:00 to 17:00 is assumed and said so. */
function hoursOf(p) {
  var a = toMin(p && p.workStart), b = toMin(p && p.workEnd);
  return { start: a === null ? DEF_START : a, end: b === null ? DEF_END : b, set: a !== null || b !== null };
}
function inside(min, h) { return h.start <= h.end ? min >= h.start && min < h.end : min >= h.start || min < h.end; }
function spanText(min) { return min >= 60 ? Math.round(min / 60) + 'h' : Math.max(1, min) + 'm'; }
/**
 * Where a person's day is now. o: {leave, holiday (a name), tz (used when the person has none)}.
 * state: working, before, after, weekend, leave, holiday or unknown.
 */
function personStatus(p, now, o) {
  o = o || {};
  var tz = validTz(p && p.tz) ? p.tz : validTz(o.tz) ? o.tz : '';
  if (!tz) return { state: 'unknown', label: 'Time zone not known yet', off: false, away: false, local: '', tz: '' };
  var lp = parts(tz, now), h = hoursOf(p), wk = lp.wd === 0 || lp.wd === 6, r = { tz: tz, local: lp.hm, day: lp.day, wd: lp.wd, min: lp.min, hours: h, own: !!(p && validTz(p.tz)) };
  r.night = lp.min < 6 * 60 || lp.min >= 22 * 60;
  r.inHours = inside(lp.min, h);
  if (o.leave) { r.state = 'leave'; r.label = 'On leave'; }
  else if (o.holiday) { r.state = 'holiday'; r.label = 'Public holiday'; r.holiday = String(o.holiday); }
  else if (wk) { r.state = 'weekend'; r.label = 'Weekend'; }
  else if (inside(lp.min, h)) { r.state = 'working'; r.label = 'Working now'; r.leftMin = ((h.end - lp.min) + 1440) % 1440; }
  else if (h.start <= h.end ? lp.min < h.start : lp.min >= h.end && lp.min < h.start) {
    r.state = 'before'; r.startsInMin = h.start - lp.min; r.label = 'Starts in ' + spanText(r.startsInMin);
  } else { r.state = 'after'; r.label = 'Finished for the day'; }
  r.off = r.state !== 'working'; r.away = r.state === 'leave' || r.state === 'holiday';
  return r;
}
/** Counts for the team pill: working now, outside their hours, and away (leave or a public holiday). */
function teamSummary(list) {
  var c = { working: 0, off: 0, away: 0, total: 0 };
  list.forEach(function (s) { if (!s || s.state === 'unknown') return; c.total++; if (s.state === 'working') c.working++; else if (s.away) c.away++; else c.off++; });
  var bits = [];
  if (c.working) bits.push(c.working + ' working');
  if (c.off) bits.push(c.off + ' off');
  if (c.away) bits.push(c.away + ' away');
  c.text = bits.length ? 'Team: ' + bits.join(', ') : 'Team time';
  return c;
}

/**
 * The best overlap: the stretch of the viewer's day when most people are inside their working hours,
 * in 30 minute steps. When today's best stretch is over, tomorrow's is given instead.
 * people: [{id, tz, workStart, workEnd}]. o: {now, tz (the viewer's), away(person, day) -> true when on leave or a holiday that day, step}.
 */
function bestOverlap(people, o) {
  var tz = validTz(o.tz) ? o.tz : 'UTC', step = (o.step || 30) * 6e4, list = people.filter(function (p) { return p && validTz(p.tz || o.fallbackTz); });
  if (list.length < 2) return null;
  function scan(day) {
    var from = zonedMs(day, '00:00', tz), to = zonedMs(addDay(day, 1), '00:00', tz), slots = [], max = 0;
    for (var t = from; t < to; t += step) {
      var ids = list.filter(function (p) {
        var z = validTz(p.tz) ? p.tz : o.fallbackTz, a = parts(z, t), b = parts(z, t + step - 6e4), h = hoursOf(p);
        if (a.wd === 0 || a.wd === 6 || (o.away && o.away(p, a.day))) return false;
        return inside(a.min, h) && inside(b.min, h);
      }).map(function (p) { return p.id; });
      if (ids.length > max) max = ids.length;
      slots.push({ t: t, ids: ids });
    }
    if (max < 2) return null;
    // runs of slots where the most people overlap, the same people throughout
    var runs = [], cur = null;
    slots.forEach(function (s) {
      var key = s.ids.length === max ? s.ids.join(',') : '';
      if (key && cur && cur.key === key && cur.end === s.t) cur.end = s.t + step;
      else { cur = key ? { key: key, start: s.t, end: s.t + step, ids: s.ids } : null; if (cur) runs.push(cur); }
    });
    var longest = function (a) { return a.reduce(function (x, y) { return !x || y.end - y.start > x.end - x.start ? y : x; }, null); };
    var pick = longest(runs.filter(function (r) { return r.end > o.now; })) || longest(runs);
    return { day: day, start: pick.start, end: pick.end, ids: pick.ids, count: max, total: list.length, past: pick.end <= o.now };
  }
  var today = parts(tz, o.now).day, r = scan(today);
  if (r && !r.past) return Object.assign(r, { when: 'today', from: parts(tz, r.start).hm, to: parts(tz, r.end).hm });
  for (var i = 1; i <= 7; i++) {
    var n = scan(addDay(today, i));
    if (n) return Object.assign(n, { when: i === 1 ? 'tomorrow' : 'later', from: parts(tz, n.start).hm, to: parts(tz, n.end).hm });
  }
  return r ? Object.assign(r, { when: 'today', from: parts(tz, r.start).hm, to: parts(tz, r.end).hm }) : null;
}

/* ---------- personal lines ---------- */
var plural = function (n, one, many) { return n + ' ' + (n === 1 ? one : many); };
var andList = function (a) { return a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]; };
var hmSpan = function (ms) { var m = Math.round(ms / 6e4); return Math.floor(m / 60) + 'h ' + ('0' + m % 60).slice(-2) + 'm'; };

/**
 * One to three short lines about what is going on for the person viewing, most important first.
 * ctx comes from contextFrom(). Lines that are about other people's work (approvals, client requests, queries, retainers)
 * are only ever made for the owner. Outside working hours, on leave or on a holiday only calm lines are given.
 * Each line: {id, text, go, ref}. go says where tapping it leads.
 */
function personalLines(ctx, max) {
  var out = [], c = ctx || {}, st = c.status || {}, owner = !!c.owner, first = c.first || '';
  var add = function (pri, id, text, go, ref, calm) { out.push({ pri: pri, id: id, text: text, go: go || '', ref: ref || '', calm: !!calm }); };
  var resting = st.state === 'leave' || st.state === 'holiday' || st.state === 'weekend' || st.state === 'after' || (st.state === 'before' && st.startsInMin > 20);
  // a meeting soon is the one thing worth knowing at any hour
  (c.meetings || []).forEach(function (m) {
    var mins = Math.round((m.startAt - c.now) / 6e4);
    if (m.startAt <= c.now && m.endAt > c.now) add(100, 'meeting', m.title + ' is happening now. Join when you are ready.', 'meeting', m.id, true);
    else if (mins >= 0 && mins <= 30) add(100 - mins / 100, 'meeting', m.title + ' starts in ' + plural(Math.max(1, mins), 'minute', 'minutes') + '.', 'meeting', m.id, true);
  });
  if (st.state === 'leave') add(95, 'leave', 'You are on leave today. Enjoy it, the work will keep.', '', '', true);
  else if (st.state === 'holiday') add(94, 'holiday', 'It is ' + (st.holiday || 'a public holiday') + ' where you are. Enjoy the day off.', '', '', true);
  else if (st.state === 'weekend') add(93, 'weekend', 'It is the weekend. Anything here can wait for Monday.', '', '', true);
  else if (st.state === 'after') add(92, 'after', 'You are past your working hours. This can all wait for tomorrow.', '', '', true);
  else if (st.state === 'before' && st.startsInMin > 20) add(91, 'before', 'Your day starts at ' + hmOf(st.hours.start) + '. Nothing needs you yet.', '', '', true);
  if (c.shift && c.shift.sinceBreakMs >= 4 * 36e5 && !c.shift.onBreak) add(90, 'break', 'You have worked ' + hmSpan(c.shift.sinceBreakMs) + ' without a break. A short pause will help.', 'clock');
  if (owner) {
    var ap = c.approvals || {}, kinds = [];
    if (ap.sheets) kinds.push(plural(ap.sheets, 'timesheet', 'timesheets'));
    if (ap.claims) kinds.push(plural(ap.claims, 'time claim', 'time claims'));
    if (ap.expenses) kinds.push(plural(ap.expenses, 'expense', 'expenses'));
    if (ap.leave) kinds.push(plural(ap.leave, 'leave request', 'leave requests'));
    var nAp = (ap.sheets || 0) + (ap.claims || 0) + (ap.expenses || 0) + (ap.leave || 0);
    if (nAp) add(80, 'approvals', kinds.length === 1 ? kinds[0] + (nAp === 1 ? ' is' : ' are') + ' waiting for your approval.' : nAp + ' things are waiting for your approval: ' + andList(kinds) + '.',
      'approvals', ap.sheets || ap.claims ? 'time' : ap.expenses ? 'exp' : 'leave');
    if (c.queries) add(78, 'queries', c.queries === 1 && c.queryClient ? c.queryClient + ' has a question about some hours.' : plural(c.queries, 'client question about hours is', 'client questions about hours are') + ' waiting.', 'queries');
    if (c.requests) add(76, 'requests', c.requests === 1 ? 'A client request is waiting for you.' : c.requests + ' client requests are waiting for you.', 'requests');
    (c.retainers || []).filter(function (r) { return r.pct >= 85; }).slice(0, 1).forEach(function (r) {
      add(60, 'retainer', r.pct >= 100 ? r.name + ' has used all of this month\'s retainer.' : r.name + ' has used ' + r.pct + '% of this month\'s retainer.', 'retainer', r.id);
    });
  }
  if (c.questions) add(74, 'questions', c.questions === 1 && c.questionFrom ? c.questionFrom + ' is waiting on your answer.' : plural(c.questions, 'person is', 'people are') + ' waiting on your answers.', 'questions');
  if (c.sentBack) add(72, 'sentback', c.sentBack === 1 ? (c.sentBackBy ? c.sentBackBy + ' sent a task back to you with a note.' : 'A task came back to you with a note.') : c.sentBack + ' tasks came back to you with notes.', 'sentback', c.sentBackId || '');
  if (c.overdue) add(70, 'overdue', c.overdue === 1 ? 'One of your tasks is past its date. One small step is enough.' : c.overdue + ' of your tasks are past their dates. Pick one small step.', 'late');
  if (c.dueToday > 0 && c.dueToday === c.doneToday && !c.overdue) add(55, 'alldone', 'Everything for today is done. Well played.', '', '', true);
  if (c.firstDay) add(50, 'firstday', 'Welcome' + (c.workspace ? ' to ' + c.workspace : '') + (first ? ', ' + first : '') + '. One small task is a fine start.', 'today', '', true);
  if (!resting && st.wd === 1 && st.min < 12 * 60) add(45, 'monday', 'Monday morning. A good time to plan the week.', 'week');
  if (!resting && st.wd === 5 && st.min >= 13 * 60) add(45, 'friday', owner ? 'Friday afternoon. Wrap up and send clients their updates.' : 'Friday afternoon. Wrap up and send your updates.', 'today');
  if (c.streak >= 2) add(40, 'streak', c.startedToday ? c.streak + ' days in a row you have started something. Nice rhythm.' : c.streak + ' days in a row so far. One small start keeps it going.', 'start');
  return out.filter(function (l) { return !resting || l.calm; })
    .sort(function (a, b) { return b.pri - a.pri; })
    .filter(function (l, i, a) { return a.findIndex(function (x) { return x.id === l.id; }) === i; })
    .slice(0, max || 3)
    .map(function (l) { return { id: l.id, text: l.text, go: l.go, ref: l.ref }; });
}

/**
 * What the personal lines need, worked out from the state the server sent this viewer.
 * Only the viewer's own work is counted (tasks assigned to them, their questions, their meetings);
 * approvals, client requests, queries and retainers are counted for the owner only.
 * o: {me, now, tz (the device's), holiday(name) lookup: holidayFor(tz, day)}.
 */
function contextFrom(S, o) {
  var me = o.me, now = o.now, p = (S.people || []).find(function (x) { return x.id === me; }) || {}, set = S.settings || {}, dz = validTz(set.deadlineTz) ? set.deadlineTz : 'Africa/Lagos';
  var tz = validTz(o.tz) ? o.tz : validTz(p.tz) ? p.tz : dz, mine = Object.assign({}, p, { tz: tz });
  var myDay = parts(tz, now).day, today = parts(dz, now).day;
  var onLeave = (S.leaves || []).some(function (l) { return l.personId === me && l.status === 'approved' && l.from <= myDay && l.to >= myDay; });
  var hol = o.holidayFor ? o.holidayFor(tz, myDay) : '';
  var status = personStatus(mine, now, { leave: onLeave, holiday: hol });
  var isOpen = function (t) { return t.status !== 'done'; };
  var deadline = function (t) { return t.due ? zonedMs(t.due, t.end || t.start || '23:59', dz) : 0; };
  var minesT = (S.tasks || []).filter(function (t) { return t.assignee === me || (!t.assignee && t.createdBy === me); });
  var overdue = minesT.filter(function (t) { return isOpen(t) && t.due && deadline(t) < now; }).length;
  var dueToday = minesT.filter(function (t) { return t.due === today; });
  var back = minesT.filter(function (t) { var u = (t.updates || [])[(t.updates || []).length - 1]; return isOpen(t) && t.assignee === me && u && u.by !== me && /^Sent back/.test(u.text || ''); });
  var qs = []; (S.tasks || []).forEach(function (t) { (t.updates || []).forEach(function (u) { if (u.question && u.to === me && !u.answeredAt) qs.push(u.by); }); });
  var nameOf = function (id) { var x = (S.people || []).find(function (y) { return y.id === id; }); return x ? String(x.name || '').split(/\s+/)[0] : ''; };
  var meetings = (S.meetings || []).filter(function (m) { return m.status === 'scheduled' && (m.createdBy === me || (m.attendees || []).indexOf(me) >= 0) && (m.rsvp || {})[me] !== 'no'; })
    .map(function (m) { return { id: m.id, title: m.title, startAt: m.startAt, endAt: m.startAt + (m.durationMin || 30) * 6e4 }; });
  var sh = (S.shifts || []).find(function (x) { return x.personId === me && !x.out; }), shift = null;
  if (sh) {
    var lastBreak = (sh.breaks || []).reduce(function (a, b) { return Math.max(a, b.end || now); }, sh.in);
    shift = { onBreak: (sh.breaks || []).some(function (b) { return !b.end; }), sinceBreakMs: now - lastBreak };
  }
  var ctx = { now: now, owner: !!S.owner, first: String(p.name || '').split(/\s+/)[0], workspace: (S.workspace || {}).name || '', status: status, meetings: meetings,
    overdue: overdue, dueToday: dueToday.length, doneToday: dueToday.filter(function (t) { return !isOpen(t); }).length,
    sentBack: back.length, sentBackBy: back.length === 1 ? nameOf((back[0].updates || []).slice(-1)[0].by) : '', sentBackId: back.length === 1 ? back[0].id : '',
    questions: qs.filter(function (v, i, a) { return a.indexOf(v) === i; }).length, questionFrom: qs.length ? nameOf(qs[0]) : '',
    streak: (S.myPatterns || {}).streak || 0, startedToday: !!(S.myPatterns || {}).startedToday, shift: shift,
    firstDay: !!((p.joinedAt || p.addedAt) && parts(tz, p.joinedAt || p.addedAt).day === myDay) };   // the day they joined, in their own time
  if (S.owner) {
    var queried = (S.time || []).filter(function (e) { return e.clientOk && e.clientOk.state === 'queried'; }), subj = function (id) { return (S.subjects || []).find(function (s) { return s.id === id; }); };
    ctx.approvals = { sheets: (S.sheets || []).filter(function (x) { return x.status === 'submitted'; }).length,
      claims: (S.time || []).filter(function (e) { return e.claim && e.claim.state === 'pending'; }).length,
      expenses: (S.expenses || []).filter(function (e) { return e.status === 'pending'; }).length,
      leave: (S.leaves || []).filter(function (l) { return l.status === 'pending'; }).length };
    ctx.queries = queried.length;
    ctx.queryClient = queried.length === 1 && subj(queried[0].subjectId) ? subj(queried[0].subjectId).name : '';
    ctx.requests = (S.tasks || []).filter(function (t) { return t.request && t.request.state === 'new'; }).length;
    ctx.retainers = (S.budgets || []).map(function (b) { var sb = subj(b.subjectId); return { id: b.subjectId, name: sb ? sb.name : 'A client', pct: Math.round(Number(b.pct) || 0) }; }).sort(function (a, b) { return b.pct - a.pct; });
  }
  return ctx;
}

var API = { NUGGETS: NUGGETS, nextNugget: nextNugget, slotFor: slotFor, shuffled: shuffled, validTz: validTz, parts: parts, offsetMin: offsetMin, zonedMs: zonedMs, offsetLabel: offsetLabel,
  hoursOf: hoursOf, personStatus: personStatus, teamSummary: teamSummary, bestOverlap: bestOverlap, personalLines: personalLines, contextFrom: contextFrom, hmOf: hmOf, toMin: toMin };
root.HLHome = API;
})(typeof window !== 'undefined' ? window : globalThis);
