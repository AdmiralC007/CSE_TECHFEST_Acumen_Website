# from flask import render_template
# from acumen.app import app

# @app.route('/')
# def home():
#     return render_template('index.html')

# from flask import render_template, Blueprint

# main = Blueprint('main', __name__)

# @main.route('/')
# def home():
#     return render_template('index.html')

from flask import render_template, Blueprint, send_from_directory

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return render_template('index.html')

@main.route('/about')
def about():
    return render_template('about.html')  # Includes style.css + about.css
@main.route('/events/poster_presentation')
def poster_presentation():
    return render_template('poster_presentation.html')
@main.route('/events/Paper_presentation')
def Paper_presentation():
    return render_template('Paper_presentation.html')
@main.route('/events/Project_Expo')
def Project_Expo():
    return render_template('Project_Expo.html')
@main.route('/events/Code_Sprint')
def Code_Sprint():
    return render_template('Code_Sprint.html')
@main.route('/events/Bid_Code')
def Bid_Code():
    return render_template('Bid_Code.html')
@main.route('/events/jaibreak')
def jaibreak():
    return render_template('jaibreak.html')
@main.route('/events/sharktank')
def sharktank():
    return render_template('sharktank.html')
@main.route('/events/ai_imagination')
def ai_imagination():
    return render_template('ai_imagination.html')
@main.route('/events/Code_Relay')
def Code_Relay():
    return render_template('Code_Relay.html')
@main.route('/events/Treasure_Hunt')
def Treasure_Hunt():
    return render_template('Treasure_Hunt.html')
@main.route('/events/Make_a_Meme')
def Make_a_Meme():
    return render_template('Make_a_Meme.html')
@main.route('/events/Sherlock_Holmes')
def Sherlock_Holmes():
    return render_template('Sherlock_Holmes.html')
@main.route('/events/Movie_Hunt')
def Movie_Hunt():
    return render_template('Movie_Hunt.html')
@main.route('/events/Call_of_Duty')
def Call_of_Duty():
    return render_template('Call_of_Duty.html')
@main.route('/events/Auction_War')
def Auction_War():
    return render_template('Auction_War.html')
@main.route('/events/Squid_Game')
def Squid_Game():
    return render_template('Squid_Game.html')
@main.route('/events/Illusion_Snake')
def Illusion_Snake():
    return render_template('Illusion_Snake.html')
@main.route('/events/Three_Legged_Maze')
def Three_Legged_Maze():
    return render_template('Three_Legged_Maze.html')
@main.route('/events/Syntax')
def Syntax():
    return render_template('Syntax.html')
@main.route('/committee')
def committee():
    return render_template('committee.html')  # This should be the static committee page
@main.route('/sponsors')
def sponsors():
    return render_template('sponsors.html')
@main.route('/favicon.ico')
def favicon():
    return send_from_directory('static', 'favicon.ico')




