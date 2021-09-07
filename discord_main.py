import os
import random
import discord
import time
from discord.ext import commands
import discord.ext.commands.errors
from discord.utils import get
from dotenv import load_dotenv
import lists
#from keep_alive import keep_alive
# use keep_alive module for hosting with replit.com -> keep_alive.py not icluded

load_dotenv()
TOKEN = os.getenv('token')
intents = discord.Intents.all()
client = commands.Bot(command_prefix='%', intents=intents)
client.remove_command('help')
sad_words = lists.sad_words
bad_words = lists.bad_words
encouragements = lists.encouragements
emojis = ['1️⃣', '2️⃣', '3️⃣']
guild_ids = [752565596989947994]

@client.event
async def on_ready():
    print(f'Logged in as {client.user}')
    await client.change_presence(activity=discord.Activity(type=discord.ActivityType.watching, name=f"%help | Bucket Lounge"), status=discord.Status.online)

@client.command()
@commands.has_permissions(send_messages=True)
async def hello(ctx):
    await ctx.reply('Hello', mention_author=False)

@client.command()
@commands.has_permissions(send_messages=True)
async def repeat(ctx, *, text):
    if text=="i'm stupid":
        await ctx.reply('Yeah we know.')
    else:
        await ctx.reply(f'{text}', mention_author=False)

@repeat.error
async def repeat_error(ctx, error):
    if isinstance(error, commands.MissingRequiredArgument):
        await ctx.send('You are missing one or more required arguments!')

@client.command()
@commands.has_permissions(send_messages=True)
async def link_embedder(ctx, text, link):
    link_embedder_embed = discord.Embed(title='Link Embedder', color=0x008f8c)
    link_embedder_embed.add_field(name='Link', value=f'[{text}]({link})')
    await ctx.send(embed=link_embedder_embed)

@link_embedder.error
async def link_gen_error(ctx, error):
    if isinstance(error, commands.MissingRequiredArgument):
        await ctx.reply("Sorry, but you are missing one or more required arguments!")

@client.command()
@commands.has_permissions(administrator=True)
async def ultimatebottester(ctx):
    await ctx.reply(lists.ultimatebottester)

@client.command()
async def rules(ctx):
    rules_embed = discord.Embed(title='Rules', color=0x008f8c)
    rules_embed.add_field(name="General Rules", value=f'No Servergrief Bots any harmful ones. \nNo Scripts, Tokenloggers or impersonaters.\nNo unessesary kicking or banning. If you want to test these commands, use your own alt account (1pU)', inline=False)
    rules_embed.add_field(name='Voice Channel Rules', value='General voice rules apply', inline=False)
    rules_embed.set_footer(text='Bucket Helper', icon_url='https://i.ibb.co/2MTQPN1/B-Bot-v2.png')
    rules_msg = await ctx.send(embed=rules_embed)
    await rules_msg.add_reaction('✅')

@client.event
async def on_raw_reaction_add(payload):
    if payload.guild_id==None:
        return
    if payload.message_id==730748953376850013:
        guild = client.get_guild(payload.guild_id)
        member = guild.get_member(payload.user_id)
        role = get(guild.roles, id=730748953376850013)
        await member.add_roles(role, reason=None)

@client.event
async def on_raw_reaction_remove(payload):
    if payload.guild_id==None:
        return
    if payload.message_id==730748953376850013:
        guild = client.get_guild(payload.guild_id)
        member = guild.get_member(payload.user_id)
        role = get(guild.roles, id=730748953376850013)
        await member.remove_roles(role, reason=None)

@client.command()
@commands.has_permissions(send_messages=True)
async def docs(ctx):
    docs = discord.Embed(title='Bucket Helper Docs', color=0x008f8c)
    docs.add_field(name='Docs', value='[Link](https://docs.google.com/document/d/1YIJuB1ywV1NeLcIVhFbEws-WstiLZWrK2dMbjXcBuT0/edit?usp=sharing)')
    docs.set_footer(text='Bucket Helper', icon_url='https://i.ibb.co/2MTQPN1/B-Bot-v2.png')
    ctx_msg = await ctx.reply(embed=docs, mention_author=False)
    time.sleep(10)
    await ctx_msg.delete()

@client.command()
@commands.has_permissions(send_messages=True)
async def rollthedice(ctx):
    diceroll = random.randint(1, 6)
    response = f'Rolling the dice🎲... \nI rolled a {diceroll}'
    await ctx.send(response)

@client.command(aliases=['rng'])
@commands.has_permissions(send_messages=True)
async def randomnumbergenerator(ctx, a=1, b=10):
    a = int(a)
    b = int(b)
    c = b+1
    rng_number = random.randrange(a, c)
    await ctx.reply(rng_number, mention_author=False)

@randomnumbergenerator.error
async def rng_error(ctx, error):
    if isinstance(error, commands.MissingRequiredArgument):
        await ctx.reply('Sorry, but you are missing one or more required arguments!')

@client.command()
@commands.has_permissions(kick_members=True)
async def kick(ctx, member : discord.Member, *, reason=None):
    servur = 'Bucket Lounge'
    kick_embed=discord.Embed(title='Kicked Member', color=0x008f8c)
    kick_embed.add_field(name=f'Offender: {member}', value=f'Reason: {reason}')
    kick_embed.set_footer(text='Bucket Helper', icon_url='https://i.ibb.co/2MTQPN1/B-Bot-v2.png')
    kick_embed2 = discord.Embed(title=f"You've been kicked in **{servur}**", color=0x008f8c)
    kick_embed2.add_field(name='Reason:', value=f'{reason}')
    kick_embed2.set_footer(text='Bucket Helper', icon_url='https://i.ibb.co/2MTQPN1/B-Bot-v2.png')
    await member.send(embed=kick_embed2)
    await member.kick()
    await ctx.reply(embed=kick_embed)

@kick.error
async def kick_error(ctx, error):
    if isinstance(error, commands.MissingPermissions):
        await ctx.reply("Sorry, but you cannot do that!")

@client.command()
@commands.has_permissions(ban_members=True)
async def ban(ctx, member : discord.Member, *, reason=None):
    server = 'Bucket Lounge'
    ban_embed=discord.Embed(title='Banned Member', color=0x008f8c)
    ban_embed.add_field(name=f'Offender: {member}', value=f'Reason: {reason}')
    ban_embed.set_footer(text='Bucket Helper', icon_url='https://i.ibb.co/2MTQPN1/B-Bot-v2.png')
    ban_embed2 = discord.Embed(title=f"You've been banned in **{server}**", color=0x008f8c)
    ban_embed2.add_field(name='Reason:', value=f'{reason}')
    ban_embed2.set_footer(text='Bucket Helper', icon_url='https://i.ibb.co/2MTQPN1/B-Bot-v2.png')
    await member.send(embed=ban_embed2)
    await member.ban()
    await ctx.send(embed=ban_embed)

@ban.error
async def ban_error(ctx, error):
    if isinstance(error, commands.MissingPermissions):
        await ctx.send("Sorry, but cannot do that!")

@client.command()
@commands.has_permissions(send_messages=True)
async def ping(ctx):
    await ctx.send('Pong')

@client.command()
@commands.has_permissions(manage_messages=True)
async def version(ctx):
    await ctx.send('Bucket Helper v.2.3-d')

@client.command(aliases=['yt'])
@commands.has_permissions(send_messages=True)
async def youtube(ctx):
    ytembed=discord.Embed(title='Youtube Channels', description='Bucket Lounge Youtube Channels \nSubbing to them  helps alot!', color=0x008f8c)
    ytembed.add_field(name='BucketMC', value='[BucketMC](https://www.youtube.com/channel/UCDHdVIW8c4mYU2DfNfT1_8A)')
    ytembed.add_field(name='Bucketfili Team', value='[Bucketfili Team](https://www.youtube.com/channel/UCpTh5D8YiR4lwDx2Yj8FPlw)')
    ytembed.set_footer(text='Bucket Helper', icon_url='https://i.ibb.co/2MTQPN1/B-Bot-v2.png')
    await ctx.reply(embed=ytembed, mention_author=False)

@client.command()
@commands.has_permissions(send_messages=True)
async def staff(ctx):
    staff_team = discord.Embed(title='Staff Team', description='Staff of Bucket Lounge', color=0x008f8c)
    staff_team.add_field(name='Owner', value='BrawlingTag#7763', inline=False)
    staff_team.add_field(name='Owner', value='vauili#9666', inline=False)
    staff_team.add_field(name='Admin', value='UphillBucket687#0001', inline=False)
    staff_team.add_field(name='Moderators', value='Lecocotierviolet#9090 \n𝐘𝐨𝐫𝐢#0001 \nTempo 80#6944\nskuninator#1765', inline=False)
    staff_team.set_footer(text='Bucket Helper', icon_url='https://i.ibb.co/2MTQPN1/B-Bot-v2.png')
    await ctx.send(embed=staff_team)

@client.command(aliases=['fs'])
@commands.has_permissions(send_messages=True)
async def fruit_salad(ctx):
    fsmeme=discord.Embed(title='Fruit Salad', description='yummy yummy', color=0x008f8c)
    fsmeme.add_field(name='Fruit Salad🥗', value='[Video](https://www.tiktok.com/@krumbleyt/video/6986987312198454533?sender_device=pc&sender_web_id=6913575037260662277&is_from_webapp=v1&is_copy_url=0)')
    await ctx.send(embed=fsmeme)

#region help-command
@client.command()
@commands.has_permissions(send_messages=True)
async def help(ctx):
    help_page1 = discord.Embed(title='Help Page #1', description='All the commands of Bucket Helper#6515, Prefix=%', color=0x008f8c)
    help_page1.add_field(name='vc (w. prefix)', value='Pings Staff and deletes original message', inline=False)
    help_page1.add_field(name='ping (w. prefix)', value='Pong!', inline=False)
    help_page1.add_field(name='hello (w. prefix)', value='Hello!', inline=False)
    help_page1.add_field(name='help (w. prefix)', value='Shows this helpful embed.', inline=False)
    help_page1.add_field(name='is bot off', value='Is bot on? or off?', inline=False)
    help_page1.add_field(name='randomnumbergenerator (w.p. | req. 2 args | alias: rng)', value=f'Gives out a random number in the specified: range %rng a b.',inline=False)
    help_page1.set_footer(text='Bucket Helper', icon_url='https://i.ibb.co/2MTQPN1/B-Bot-v2.png')
    help_page_reaction_1 = await ctx.reply(embed=help_page1, mention_author=False)
    for i in range(3):
        await help_page_reaction_1.add_reaction(emojis[i])

@client.event
async def on_reaction_add(reaction, user):
    if user==client.user:
        return
    
    if reaction.emoji=='1️⃣':
        help_page1 = discord.Embed(title='Help Page #1', description='All the commands of Bucket Helper#6515, Prefix=%', color=0x008f8c)
        help_page1.add_field(name='vc (wo. prefix)', value='Pings Staff and deletes original message', inline=False)
        help_page1.add_field(name='ping (w. prefix)', value='Pong!', inline=False)
        help_page1.add_field(name='hello (w. prefix)', value='Hello!', inline=False)
        help_page1.add_field(name='help (w. prefix)', value='Shows this helpful embed.', inline=False)
        help_page1.add_field(name='is bot off (wo. prefix)', value='Is bot on? or off?', inline=False)
        help_page1.add_field(name='randomnumbergenerator (w.p. | req. 2 args | alias: rng)', value=f'Gives out a random number in the specified range: %rng a b.',inline=False)
        help_page1.set_footer(text='Bucket Helper', icon_url='https://i.ibb.co/2MTQPN1/B-Bot-v2.png')
        await reaction.message.edit(embed=help_page1)
        await reaction.remove(user)

    if reaction.emoji=='2️⃣':
        help_page2=discord.Embed(title='Help Page #2', description='All the commands of Bucket Helper#6515, Prefix=%', color=0x008f8c)
        help_page2.add_field(name='staff (w. prefix)', value='Shows the Bucket Lounge Staff Team.', inline=False)
        help_page2.add_field(name='Youtube (w.p. | alias: yt)', value='Shows Bucket-Lounge YT Channels.', inline=False)
        help_page2.add_field(name='fruit_salad (w.p | alias: fs)', value='Fruit Salad meme.', inline=False)
        help_page2.add_field(name='is bot on (wo. prefix)', value='Shows Bot Statuspage, if no reponse,\nBot might be down.', inline=False)
        help_page2.add_field(name='kick (w.p. | req. reason)', value='Kicks a member for reason', inline=False)
        help_page2.add_field(name='ban (w.p. | req. reason)', value='Bans a member for a reason', inline=False)
        help_page2.set_footer(text="Bucket Helper", icon_url='https://i.ibb.co/2MTQPN1/B-Bot-v2.png')
        await reaction.message.edit(embed=help_page2)
        await reaction.remove(user)

    if reaction.emoji=='3️⃣':
        help_page3 = discord.Embed(title='Help Page #3', description='All the commands of Bucket Helper#6515, Prefix=%', color=0x008f8c)
        help_page3.add_field(name='rollthedice (w. prefix)', value='Returns a random number between 1 and 6.', inline=False)
        help_page3.add_field(name='link_embedder (w.p. | req. 2 args)', value=f'Sends an embed with the specified link embedded in it: %link_embedder text link.', inline=False)
        help_page3.set_footer(text='Bucket Helper', icon_url='https://i.ibb.co/2MTQPN1/B-Bot-v2.png')
        await reaction.message.edit(embed=help_page3)
        await reaction.remove(user)
#endregion

@client.event 
async def on_member_join(member):
    channel = client.get_channel(880112441755844642)
    rules_channel = client.get_channel(880112441755844639)
    welcome_msg = f'Welcome **{member}** to the server! Please read {rules_channel.mention}'
    await channel.send(welcome_msg)

@client.event
async def on_member_remove(member):
    channel = client.get_channel(880112441755844642)
    await channel.send(f'**{member}** just left server.')
    
@client.listen('on_message')
async def on_message(message):
    if message.author==client.user:
        return
    
    if message.content.startswith('vc'):
        mention = f"<@&831818141541597204>"
        msgauth = message.author
        await message.delete()
        await message.channel.send(f'vc? {mention} -{msgauth}')

    if any(word in message.content for word in bad_words):
        msgauth = message.author
        await message.delete()
        await message.channel.send(f"Hey {msgauth}, don't say that!")
    
    if any(word in message.content for word in sad_words):
        await message.channel.send(random.choice(encouragements))

    if message.content.startswith('is bot on'):
        bot_on = discord.Embed(title='Bucket Helper Bot Status', color=0x008f8c)
        bot_on.add_field(name='Status', value='[Uptime Robot](https://stats.uptimerobot.com/9A3yqHmG0O)')
        bot_on.set_footer(text="Bucket Helper", icon_url="https://i.ibb.co/2MTQPN1/B-Bot-v2.png")
        await message.channel.send(embed=bot_on, mention_author=False)

    if message.content.startswith('is bot off'):
        await message.channel.send('no you dumbass😑', mention_author=False)

@commands.Cog.listener()
async def on_command_error(ctx, error):
    if isinstance(error, commands.BotMissingPermissions):
        await ctx.send("It looks like i'm missing permissions to run this command!")
    
    elif isinstance(error, commands.CommandError):
        await ctx.send('I ran into some trouble running that command! Please check spelling or argument mistakes.')

#keep_alive()
client.run(TOKEN)